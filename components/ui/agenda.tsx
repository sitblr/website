import { useState, useEffect, useRef } from "react";

import { listdataPropos } from "@/components/ui/listbox";
import { useSession } from "@/hooks/use-session-modal";

interface AgendaProps {
    hideSearch?: boolean;
    searchPathsValue?: listdataPropos;
    hideSticky?: boolean;
}
type track = {
  id: string;
  trackName: string;
  active: boolean;
};
type sessionsSequence = {
  tracktitle: string;
  sessiontitle: string;
  speakers: string;
  speaker1: string;
  speaker2: string;
  speaker1_social: string;
  speaker2_social: string;
  pathtags: string;
  track: string;
};

type session = {
  time: string;
  type: string;
  tracktitle: string;
  sessionsBySequence: sessionsSequence[];
};
type eventdata = {
  id: string;
  title: string;
  register: string;
  sessions: session[];
  tracks: track[];
};
type event = eventdata | null;

const AgendaUI: React.FC<AgendaProps> = (AgendaProps) => {
  const [data, setData] = useState<event>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [query, setQuery] = useState<String>("");

  const {
    onOpen,
    setTrackTitle,
    setTrackDescription,
    setSessionTitle,
    setSessionDesc,
    setSessionFeedbackURL,
    setOrganization,
    setSpeakers,
    setSpeaker1,
    setSpeaker1Social,
    setSpeaker2,
    setSpeaker2Social,
    setTrack,
    setSessionNo,
  } = useSession();

  useEffect(() => {
    fetch(`/api/events/sap-inside-track-feb-2024`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsMounted(true);
      });
  }, []);

  const multipleSearch = (data) => {
    if (!query && !AgendaProps.searchPathsValue && data?.length>0) {
      return JSON.parse(JSON.stringify(data));
    }

    let queryLCL = query;
    if(AgendaProps.searchPathsValue){
        queryLCL = AgendaProps.searchPathsValue.key;
    }

    let filteredData = JSON.parse(JSON.stringify(data));
    let filteredSessions = [];
    filteredData.sessions.forEach(function (item) {
      if (item.type === "grid") {
        var filtSessionsByTrack = item.sessionsBySequence.filter(function (el) {
          return (
            el.description.toLowerCase().includes(queryLCL.toLowerCase()) ||
            el.sessiontitle.toLowerCase().includes(queryLCL.toLowerCase()) ||
            el.tracktitle.toLowerCase().includes(queryLCL.toLowerCase()) ||
            el?.pathtags?.toLowerCase()?.includes(queryLCL.toLowerCase())
          );
        });
      } else {
        filtSessionsByTrack = item.sessionsBySequence;
      }
      if (filtSessionsByTrack.length > 0) {
        item.sessionsBySequence = filtSessionsByTrack;
        filteredSessions.push(item);
      }
    });
    filteredData.sessions = filteredSessions;
    return filteredData;
  };

  const onChangeHandle = function (e) {
    setQuery(e.target.value);
  };

  const searchButton = useRef(null);
  if (!isMounted) {
    return null;
  }

  const filteredData = multipleSearch(data);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        {filteredData?.eventCompleted &&
          !!filteredData?.linktopresentations && (
            <div className="flex flex-wrap px-2">
              <a
                className="px-2 text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                href={filteredData?.linktopresentations}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Presentations
              </a>
              {/* <div onClick={()=>{onOpenChecklist()}} className="cursor-pointer px-2 text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Attendee Checklist</div> */}
            </div>
          )}

        {!AgendaProps.hideSearch && <div className="bg-white w-full sticky top-0 z-50">
          <div className="mx-2 flex pt-2 items-center">
            <div className="text-2xl font-semibold pr-4">Search</div>
            <input
              type="text"
              ref={searchButton}
              name="search"
              onChange={onChangeHandle}
              className="w-1/5 mt-1 px-3 py-4 bg-white border shadow-sm border-grey-300 placeholder-grey-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Search for sessions here..."
            />
          </div>
        </div>}

        {filteredData?.sessions.map((session, idx) => {
          return (
            <div key={session.time + idx} className="mx-auto bg-gray-50 ">
              <div className={`${AgendaProps.hideSticky ? '':'top-20 sticky z-40' } rounded-l mt-4 bg-gradient-to-r from-gray-200 w-full`}>
                <div className="flex">
                  <div className="p-4">
                    <label className="text-gray-500">{session.time}</label>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 pb-4 pl-4 pr-4">
                <div className=" w-full">
                  <div className="flex flex-wrap">
                    {session.type === "grid" ? (
                      session.sessionsBySequence.map((seqsession) => {
                        switch (session.type) {
                          case "grid":
                            return (
                              <div
                                key={seqsession.track + seqsession.sessionseq}
                                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 pt-4 pr-4"
                              >
                                <div
                                  onClick={() => {
                                    setTrackTitle(seqsession.tracktitle);
                                    setSessionTitle(seqsession.sessiontitle);
                                    setSessionDesc(seqsession.description);
                                    setSessionFeedbackURL(
                                      filteredData?.linktosessionfeedback
                                    );
                                    setSpeakers(
                                      seqsession.speaker2
                                        ? seqsession.speaker1 +
                                            " | " +
                                            seqsession.speaker2
                                        : seqsession.speaker1
                                    );
                                    setSpeaker1(seqsession.speaker1);
                                    setSpeaker2(seqsession.speaker2);
                                    setSpeaker1Social(seqsession.speaker1_social);
                                    setSpeaker2Social(seqsession.speaker2_social);
                                    setTrack(seqsession.trackid);
                                    setOrganization(seqsession.organization);
                                    setSessionNo(seqsession.sessionseq);
                                    onOpen();
                                  }}
                                  className="cursor-pointer bg-white border border-slate-200 rounded-none drop-shadow-xl p-2 h-full flex flex-col justify-between"
                                >
                                  <div>
                                    <h4 className="text-xs font-bold text-gray-700">
                                      {seqsession.trackid}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                      {seqsession.tracktitle}
                                    </p>
                                  </div>
                                  <hr />

                                  <p className="text-blue-600 underline text-xs font-semibold mt-2">
                                    {seqsession.sessiontitle}
                                  </p>
                                  <p className="text-xs text-gray-800 mt-2 line-clamp-3">
                                    {seqsession.description}
                                  </p>
                                  <hr />
                                  <p className="text-xs font-semibold text-gray-500 mt-2">
                                    {seqsession.speaker2
                                      ? seqsession.speaker1 +
                                        " | " +
                                        seqsession.speaker2
                                      : seqsession.speaker1}
                                  </p>
                                </div>
                              </div>
                            );
                            break;
                        }
                      })
                    ) : (
                      <div
                        key="track.sessionseq"
                        className="z-1 flex items-center justify-center mt-4 mx-auto w-full text-center bg-white border border-slate-200 rounded-none drop-shadow-md"
                      >
                        <div className="p-4">
                          <label className="text-gray-700">
                            {" "}
                            {session.tracktitle}
                          </label>
                        </div>
                        {/* <label className=" text-gray-500">
                      {session.tracktitle}
                    </label> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="mx-auto bg-slate-50">
                        <div className="flex p-4 ">
                            <div className="w-1/5 p-2">
                                <label className='text-gray-700'>10:00 AM - 10:25 AM</label>
                            </div>
                            <div className='w-4/5'>
                                <div className="flex flex-wrap">

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP BTP General and Cross Topics</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">SAP BTP and Data to Value Strategy</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Dharani Karthikeyan (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">Pro Code + Low Code + Integration</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Using SAP Build Process Automation Pre-packaged Content to Accelerate Application Development</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Archana Shukla (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">Data-to-Value + A.I</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Reusable AI Assets. A look at reusable AI assets from SAP</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Prasanna Bhat (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Cloud Products 1</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Insights into Value Chain using Modern Architecture: calculation of CO2e</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Sanil Bhandari (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Cloud Products 2</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Get the latest outlook of SAP Cloud ALM for Implementation</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Sonal Kumar, Umesh Jagadesh (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Concur</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Concur Welcome, Keynote, Product Direction and beyond</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Srivatsan Santhanam, Priyam Pandia, Amruta Mohanty(SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP UX & Cross Topics</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">Global Search</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Roohi Ganatra (SAP labs)</p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                                        <h4 className="text-xs font-bold text-gray-500">SAP Community & Cross Topics</h4>
                                        <div className="bg-yellow-100 rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
                                            <p className="text-xs font-semibold text-gray-800 mt-2">ABAP - Open to All!</p>
                                            <p className="text-xs text-gray-600 mt-2">Speakers: Mainak Aich (VS&Co)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
      </div>
    </div>
  );
};

export default AgendaUI;
