const { JWT } = require("google-auth-library");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./credentials.json"); // the file saved above
const fs = require("fs");
const path = require("path");
// console.log(process.argv);

async function run() {
  const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ];

  let sessionOriginal = {
    speakers: "",
    speaker1: "",
    speaker2: "",
    speaker1_social: "",
    speaker2_social: "",
    sessiontitle: "",
    description: "",
    organization: "",
    socialmedia: "",
    track: "",
    sessionseq: "",
    tracktitle: "",
    track: "",
  };

  const jwt = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
  });
  const doc = new GoogleSpreadsheet(
    "1DqHqfKfDJgxgXjxk-RRWxK7MdGXEpnuccXxJwZJ9DCI",
    jwt
  );

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  rows = await sheet.getRows();

  let rawdata = [];
  rows.forEach(function (obj) {
    if (obj.get("selected") === "Selected") {
      rawdata.push(obj.toObject());
    }
  });

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
      speaker1_social: data.social1,
      speaker2_social: data.social2,
      sessiontitle: data.title,
      description: data.abstract,
      organization: data.company1,
      socialmedia: "",
      sessionseq: data.sessionseq,
      tracktitle: data.stopic,
      trackid: data.trackno,
    };
    convertedData.push(sessionOriginal);
  });

  convertedData = groupBy(convertedData, "sessionseq");
  // console.log(rawdata);
  const sessionsseq = [
    { sequence: 1, time: "10:00 - 10:40", type: "grid" },
    { sequence: "2", time: "10:45 - 11:25", type: "grid" },
    { sequence: "3", time: "11:30 - 12:10", type: "grid" },
    {
      sequence: "3.5",
      time: "12:10 - 01:00",
      type: "break",
      tracktitle: "Lunch",
    },
    { sequence: "4", time: "01:00 - 01:40", type: "grid" },
    { sequence: "5", time: "01:45 - 02:25", type: "grid" },
    { sequence: "6", time: "02:30 - 03:10", type: "grid" },
    { sequence: "7", time: "03:15 - 04:00", type: "grid" },
    {
      sequence: "8",
      time: "04:00 - 04:15",
      type: "break",
      tracktitle: "Speakers & Volunteers Recognition",
    },
    {
      sequence: "10",
      time: "04:15 - 05:00",
      type: "break",
      tracktitle: "The End - Evening Snacks & Networking",
    },
  ];

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
  fs.writeFileSync(__dirname + "/" + process.argv[2] + ".json", dataStr);
}

run();