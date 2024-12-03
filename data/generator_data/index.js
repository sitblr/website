const { JWT } = require("google-auth-library");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { google } = require('googleapis');
// const creds = require("./credentials.json"); // the file saved above
const fs = require("fs");
const path = require("path");
// console.log(process.argv);
require('dotenv').config();
let creds;
try {
  creds = JSON.parse(process.env.GOOGLEWORKSHEETSAPI);
  if (!creds) {
    throw new Error("GOOGLEWORKSHEETSAPI environment variable is not set or is empty.");
  }
} catch (error) {
  console.error("Error parsing GOOGLEWORKSHEETSAPI environment variable:", error.message);
  process.exit(1);
}

async function run() {
  const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ];

  let rows, sessionrawsseq;
  try {
    const jwt = new JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: SCOPES,
    });
    const doc = new GoogleSpreadsheet(
      "1E_hNWjCrsvi_K1ed9KJSnAq3r18adnPIC9oM-hSTn8A",
      jwt
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Sessions Sequenced"];
    const sheetHandsOn = doc.sheetsByTitle["HandsOn"];
    const sheetTrackSeq = doc.sheetsByTitle["Timing & Sequence Mapping"];
    const sheetTrackSeqDemoPod = doc.sheetsByTitle["Timing & Sequence Mapping DemoPod"];
    const TrackMetadata = doc.sheetsByTitle["Track Metadata"];

    if (!sheet) {
      throw new Error('Sheet "Sessions Sequenced" not found.');
    }
    if (!sheetTrackSeq) {
      throw new Error('Sheet "Timing & Sequence Mapping');
    }

    // const sheet = doc.sheetsByIndex[0];
    rows = await sheet.getRows();
    sessionrawsseq = await sheetTrackSeq.getRows();
    sessionrawsseqdemopod = await sheetTrackSeqDemoPod.getRows();
    trackmetadatarows = await TrackMetadata.getRows();
    handsOnSheetData = await sheetHandsOn.getRows();

  } catch (error) {
    console.error("Error accessing Google Sheets:", error.message);
    process.exit(1);
  }

  let rawdata = [];
  let rawdataDemoPod = [];
  rows.forEach(function (obj) {
    if (obj.get("IsSelected") === "Selected") {
      rawdata.push(obj.toObject());
    }
  });

  let sessionsseq = [],
    demopodsseq = [],
    trackseq = {},
    handsOndata = [];
  sessionrawsseq.forEach(function (obj) {
    sessionsseq.push(obj.toObject());
  });
  sessionrawsseqdemopod.forEach(function (obj) {
    demopodsseq.push(obj.toObject());
  });
  trackmetadatarows.forEach(function (obj) {
    let data = obj.toObject();
    trackseq[data.Track] = data.seq;
  });handsOnSheetData

  handsOnSheetData.forEach(function (obj) {
    handsOndata.push(obj.toObject());
  });


  // const trackmetadatarowsFormatted = arr.map(item => ({
  //   [item.Track]: { track: item.seq }
  // }));



  // const auth = new google.auth.GoogleAuth({
  //   keyFile: __dirname+"/cred.json",
  //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  // });
  // const authClient = await auth.getClient();
  // var googlesheets = google.sheets({
  //   version: 'v4',
  //   auth: authClient,
  // });

  // const data = await googlesheets.spreadsheets.values.get(
  //   { auth :auth,
  //   spreadsheetId:"1DqHqfKfDJgxgXjxk-RRWxK7MdGXEpnuccXxJwZJ9DCI",
  //   range: "Sheet1"
  //   }).catch(function(e){
  //     console.log(e)
  //   });


  // return;

  // rawdata.sort((a, b) => a.Track.localeCompare(b.Track));
  const groupBy = (array, key) =>
    array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});

  let convertedData = [], handsOnConvData = [];
  // rawdata.forEach(function (data) {
  //   let sessionOriginal = {
  //     speakers: "",
  //     speaker1: data.Speaker1,
  //     speaker2: data.Speaker2,
  //     speaker3: data.Speaker3,
  //     speaker4: data.Speaker4,
  //     speaker1_social: data.Speaker1LinkedIn,
  //     speaker2_social: data.Speaker2LinkedIn,
  //     speaker3_social: data?.Speaker3LinkedIn,
  //     speaker4_social: data?.Speaker4LinkedIn,
  //     sessiontitle: data.Title,
  //     description: data.Description,
  //     organization1: data.Company1,
  //     organization2: data.Company2,
  //     socialmedia: "",
  //     sessionseq: data.Sequence,
  //     tracktitle: data.Track,
  //     trackid: data.Track,
  //     trackseq: parseInt(trackseq[data.Track]),
  //     pathtags: data.PathTags,
  //     type: data.Type
  //   };
  //   convertedData.push(sessionOriginal);
  // });
  rawdata.forEach(function (data) {
    // Split the sequence into an array if it contains commas
    // console.log(data)
    const sequences = data.Sequence.toString().split(',').map(seq => seq.trim());

    // Iterate through each sequence and create a record
    sequences.forEach(sequence => {
      let sessionOriginal = {
        speakers: "",
        speaker1: data.Speaker1,
        speaker2: data.Speaker2,
        speaker3: data.Speaker3,
        speaker4: data.Speaker4,
        speaker1_social: data.Speaker1LinkedIn,
        speaker2_social: data.Speaker2LinkedIn,
        speaker3_social: data?.Speaker3LinkedIn,
        speaker4_social: data?.Speaker4LinkedIn,
        sessiontitle: data.Title,
        description: data.Description,
        organization1: data.Company1,
        organization2: data.Company2,
        socialmedia: "",
        sessionseq: parseInt(sequence), // Assign the individual sequence number
        tracktitle: data.Track,
        trackid: data.Track,
        trackseq: parseInt(trackseq[data.Track]),
        pathtags: data.PathTags,
        type: data.Type
      };
      convertedData.push(sessionOriginal);
    });
  });

  handsOndata.forEach(function (data) {
    let sessionOriginal = {
      // speakers: "",
      speaker1: data.Speaker1,
      speaker2: data.Speaker2,
      speaker3: data.Speaker3,
      speaker4: data.Speaker4,
      // speaker1_social: data.Speaker1LinkedIn,
      // speaker2_social: data.Speaker1LinkedIn,
      // speaker3_social: data?.Speaker2LinkedIn,
      // speaker4_social: data?.Speaker3LinkedIn,
      sessiontitle: data.Title,
      description: data.Description,
      organization1: "SAP",
      // organization2: data.Company2,
      // socialmedia: "",
      // sessionseq: data.Sequence,
      tracktitle: "Cafeteria",
      trackid: "Cafeteria",
      // trackseq: parseInt(trackseq[data.Track]),
      pathtags: data.PathTags
      // type: data.Type
    };
    handsOnConvData.push(sessionOriginal);
  });

  convertedData.sort((a, b) => a.trackseq - b.trackseq);

  let lectures = convertedData.filter(obj => obj.type === "Lecture");
  let demopods = convertedData.filter(obj => obj.type === "Demo Pod");

  lectures = groupBy(lectures, "sessionseq");
  demopods = groupBy(demopods, "sessionseq");
  // console.log(rawdata);
  // const sessionsseq = [
  //   { sequence: 0.1, time: "07:30 - 09:30", type: "break", tracktitle: "Networking & Registration - Ask Me Anything Booths" },
  //   { sequence: 0.2, time: "09:30 - 09:45", type: "break", tracktitle: "Keynote: Sindhu Gangadharan (SVP & MD, SAP Labs India | Head User Enablement)" },
  //   { sequence: "1", time: "10:00 - 10:40", type: "grid" },
  //   { sequence: "2", time: "10:45 - 11:25", type: "grid" },
  //   { sequence: "3", time: "11:30 - 12:10", type: "grid" },
  //   {
  //     sequence: "3.5",
  //     time: "12:10 - 01:00",
  //     type: "break",
  //     tracktitle: "Lunch",
  //   },
  //   { sequence: "4", time: "01:00 - 01:40", type: "grid" },
  //   { sequence: "5", time: "01:45 - 02:25", type: "grid" },
  //   { sequence: "6", time: "02:30 - 03:10", type: "grid" },
  //   { sequence: "7", time: "03:15 - 04:00", type: "grid" },
  //   {
  //     sequence: "8",
  //     time: "04:00 - 04:15",
  //     type: "break",
  //     tracktitle: "Speakers & Volunteers Recognition",
  //   },
  //   {
  //     sequence: "10",
  //     time: "04:15 - 05:00",
  //     type: "break",
  //     tracktitle: "The End - Evening Snacks & Networking",
  //   },
  // ];

  let finalSessions = {};

  sessionsseq.forEach(function (seq) {
    if (lectures[seq.sequence]) {
      seq.sessionsBySequence = lectures[seq.sequence];
    } else {
      seq.sessionsBySequence = [];
    }
  });


  demopodsseq.forEach(function (seq) {
    if (demopods[seq.sequence]) {
      seq.sessionsBySequence = demopods[seq.sequence];
    } else {
      seq.sessionsBySequence = [];
    }
  });

  finalSessions.lectures = sessionsseq;
  finalSessions.demopods = demopodsseq;
  finalSessions.handson = handsOnConvData;

  let dataStr = JSON.stringify(finalSessions, null, 4);
  // let session = JSON.parse(JSON.stringify(sessionOriginal));
  // Write data to JSON file
  fs.writeFileSync(__dirname + "/" + `sap-inside-track-${process.argv[2]}-${process.argv[3]}` + ".json", dataStr);
  console.log("Succesfully the agenda is updated in the file")
}

run();
