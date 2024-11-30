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

  let sessionOriginal = {
    speakers: "",
    speaker1: "",
    speaker2: "",
    speaker3: "",
    speaker4: "",
    speaker1_social: "",
    speaker2_social: "",
    speaker3_social: "",
    speaker4_social: "",
    sessiontitle: "",
    description: "",
    organization: "",
    socialmedia: "",
    track: "",
    sessionseq: "",
    tracktitle: "",
    track: "",
  };
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
    const sheetTrackSeq = doc.sheetsByTitle["Timing & Sequence Mapping"];

    if (!sheet) {
      throw new Error('Sheet "Sessions Sequenced" not found.');
    }
    if (!sheetTrackSeq) {
      throw new Error('Sheet "Timing & Sequence Mapping');
    }

    // const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const sessionrawsseq = await sheetTrackSeq.getRows();

  } catch (error) {
    console.error("Error accessing Google Sheets:", error.message);
    process.exit(1);
  }

  let rawdata = [];
  rows.forEach(function (obj) {
    if (obj.get("selected") === "Selected") {
      rawdata.push(obj.toObject());
    }
  });

  let sessionsseq = [];
  sessionrawsseq.forEach(function (obj) {
    sessionsseq.push(obj.toObject());
  });

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

  rawdata.sort((a, b) => a.trackno.localeCompare(b.trackno));
  const groupBy = (array, key) =>
    array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});

  let convertedData = [];
  rawdata.forEach(function (data) {
    let sessionOriginal = {
      speakers: "",
      speaker1: data.speaker1,
      speaker2: data.speaker2,
      speaker3: data.speaker3,
      speaker4: data.speaker4,
      speaker1_social: data.social1,
      speaker2_social: data.social2,
      speaker3_social: data.social4,
      speaker4_social: data.social4,
      sessiontitle: data.title,
      description: data.abstract,
      organization: data.company1,
      socialmedia: "",
      sessionseq: data.sessionseq,
      tracktitle: data.trackname,
      trackid: data.trackno,
      pathtags: data.PathTags
    };
    convertedData.push(sessionOriginal);
  });

  convertedData = groupBy(convertedData, "sessionseq");
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

  let finalSessions = [];

  sessionsseq.forEach(function (seq) {
    if (convertedData[seq.sequence]) {
      seq.sessionsBySequence = convertedData[seq.sequence];
    } else {
      seq.sessionsBySequence = [];
    }
  });

  let dataStr = JSON.stringify(sessionsseq, null, 4);
  let session = JSON.parse(JSON.stringify(sessionOriginal));
  // Write data to JSON file
  fs.writeFileSync(__dirname + "/" + `sap-inside-track-${process.argv[2]}-${process.argv[3]}` + ".json", dataStr);
  console.log("Succesfully the agenda is updated in the file")
}

run();
