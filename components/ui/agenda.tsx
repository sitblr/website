import { useState, useEffect, useRef } from "react";
import { usechecklist } from "@/hooks/use-checklist-modal";
import { listdataPropos } from "@/components/ui/listbox";
import { useSession } from "@/hooks/use-session-modal";
import { FaChalkboardTeacher, FaLaptopCode, FaCode } from 'react-icons/fa';

interface AgendaProps {
  hideSearch?: boolean;
  searchPathsValue?: listdataPropos;
  hideSticky?: boolean;
  searchShowBreaks?: boolean;
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

  const { onOpen: onOpenChecklist } = usechecklist();
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
    setOrganization1,
    setOrganization2,
    setSpeakers,
    setSpeaker1,
    setSpeaker1Social,
    setSpeaker2,
    setSpeaker2Social,
    setTrack,
    setSessionNo,
  } = useSession();

  useEffect(() => {
    fetch(`/api/events/sap-inside-track-dec-2024`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsMounted(true);
      });
  }, []);

  const multipleSearch = (data) => {
    if (!query && !AgendaProps.searchPathsValue) {
      return JSON.parse(JSON.stringify(data));
    }

    let queryLCL = query;
    if (AgendaProps.searchPathsValue) {
      queryLCL = AgendaProps.searchPathsValue.key;
    }

    let filteredData = JSON.parse(JSON.stringify(data));
    let filteredSessions = [];
    filteredData.sessions.lectures.forEach(function (item) {
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
      if (
        filtSessionsByTrack.length > 0 ||
        (item.type === "break" && AgendaProps.searchShowBreaks)
      ) {
        item.sessionsBySequence = filtSessionsByTrack;
        filteredSessions.push(item);
      }
    });
    filteredData.sessions.lectures = filteredSessions;
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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });

    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-wrap px-2">
          {filteredData?.eventCompleted &&
            !!filteredData?.linktopresentations && (
              <a
                className="px-2 text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                href={filteredData?.linktopresentations}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to Presentations
              </a>
            )}
        </div>

        {!AgendaProps.hideSearch && (
          <>
            <div className="w-full sticky top-0 z-50 bg-sky-50">
              <div className="mx-2 flexitems-center">
                <input
                  type="text"
                  ref={searchButton}
                  name="search"
                  onChange={onChangeHandle}
                  className="w-1/5 mt-1 px-3 py-3 border shadow-sm border-slate-400 placeholder-grey-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-none sm:text-sm focus:ring-1"
                  placeholder="Search for sessions here..."
                />
              </div>
              <div className="mx-2 sticky hidden md:block ">
                <div className="flex justify-around text-sky-700">
                  <button onClick={() => scrollToSection("lecture-sessions")} className="px-4 py-2 hover:bg-sky-100 flex items-center">
                    <FaChalkboardTeacher size={18} className="mr-2" />
                    <span>Lectures</span>
                  </button>
                  <button onClick={() => scrollToSection("demo-pods")} className="px-4 py-2 hover:bg-sky-100 flex items-center">
                    <FaChalkboardTeacher size={18} className="mr-2" />
                    <span>Demo Pods</span>
                  </button>
                  <button onClick={() => scrollToSection("hands-on")} className="px-4 py-2 hover:bg-sky-100 flex items-center">
                    <FaChalkboardTeacher size={18} className="mr-2" />
                    <span>Hands-On</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white w-full fixed bottom-0 z-50 block md:hidden">
              <div className="flex justify-around pt-2 pb-2">
                <button onClick={() => scrollToSection("lecture-sessions")} className="flex flex-col items-center text-sky-500">
                  <FaChalkboardTeacher size={24} />
                  <span className="text-xs">Lectures</span>
                </button>
                <button onClick={() => scrollToSection("demo-pods")} className="flex flex-col items-center text-sky-500">
                  <FaLaptopCode size={24} />
                  <span className="text-xs">Demo Pods</span>
                </button>
                <button onClick={() => scrollToSection("hands-on")} className="flex flex-col items-center text-sky-500">
                  <FaCode size={24} />
                  <span className="text-xs">Hands-on</span>
                </button>
              </div>
            </div>
          </>
        )}

        <div id="lecture-sessions">
          <h2 className="text-4xl font-bold my-4 text-sky-900">Lecture Sessions</h2>
          {filteredData?.sessions.lectures.map((session, idx) => {
            return (
              <div key={`${session.time}-${idx}`} className="mx-auto bg-gray-100 mt-2">
                <div
                  className={`${AgendaProps.hideSticky ? "" : "top-20 sticky z-40"
                    } mt-0 w-full pt-0`}
                >
                  <div className="flex" >
                    <div className="p-2 bg-gray-200 rounded-none">
                      <label className="text-gray-600">{session.time}</label>
                    </div>
                  </div>
                </div>
                {/* <div className="flex pt-4 pb-4 pl-4 pr-4"> */}

                <div className="flex">
                  <div className=" w-full">
                    <div className="flex flex-wrap">
                      {session.type === "grid" ? (
                        session.sessionsBySequence.map((seqsession, idx) => {
                          switch (session.type) {
                            case "grid":
                              return (
                                <div
                                  key={`${session.time}-${idx}-${seqsession.track}-${seqsession.sessionseq}`}
                                  className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 pr-2 pt-2 "
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
                                      setSpeaker1Social(
                                        seqsession.speaker1_social
                                      );
                                      setSpeaker2Social(
                                        seqsession.speaker2_social
                                      );
                                      setTrack(seqsession.trackid);
                                      setOrganization1(seqsession.organization1);
                                      setOrganization2(seqsession.organization2);
                                      setSessionNo(seqsession.sessionseq);
                                      onOpen();
                                    }}
                                    className=" rounded cursor-pointer bg-white border border-slate-300 p-2 h-full flex flex-col justify-between"
                                  >
                                    <p className="text-blue-600 underline text-xs font-semibold mt-2">
                                      {seqsession.sessiontitle}
                                    </p>
                                    <p className="text-xs text-gray-800 mt-2 line-clamp-3 mb-2">
                                      {seqsession.description}
                                    </p>
                                    <hr />
                                    <p className="text-xs font-semibold text-gray-500 mt-1 mb-1">
                                      {seqsession.speaker2
                                        ? seqsession.speaker1 +
                                        " | " +
                                        seqsession.speaker2
                                        : seqsession.speaker1}
                                    </p>

                                    <hr />
                                    <div>
                                      <h4 className="text-xs mt-1 text-gray-500">
                                        {seqsession.trackid}
                                      </h4>
                                      {/* <p className="text-xs text-gray-500">
                                        {seqsession.tracktitle}
                                      </p> */}
                                    </div>
                                  </div>
                                </div>
                              );
                              break;
                          }
                        })
                      ) : (
                        <div
                          key="track.sessionseq"
                          className="rounded mb-0 mr-2 mx-0 z-1 flex items-center justify-items-center w-full text-center bg-white border border-slate-300"
                        >
                          <div className="p-3">
                            <label className="text-gray-600">
                              {" "}
                              {session.tracktitle}
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div id="demo-pods">
          <h2 className="text-4xl font-bold my-4  text-sky-900">Demo Pods</h2>
          {filteredData?.sessions.demopods.map((session, idx) => {
            return (
              <div key={`${session.time}-${idx}`} className="mx-auto bg-gray-100 mt-2">
                <div
                  className={`${AgendaProps.hideSticky ? "" : "top-20 sticky z-40"
                    } mt-0 w-full pt-0`}
                >
                  <div className="flex" >
                    <div className="p-2 bg-gray-200 rounded-none">
                      <label className="text-gray-600">{session.time}</label>
                    </div>
                  </div>
                </div>
                {/* <div className="flex pt-4 pb-4 pl-4 pr-4"> */}

                <div className="flex">
                  <div className=" w-full">
                    <div className="flex flex-wrap">
                      {session.type === "grid" ? (
                        session.sessionsBySequence.map((seqsession, idx) => {
                          switch (session.type) {
                            case "grid":
                              return (
                                <div
                                  key={`${session.time}-${idx}-${seqsession.track}-${seqsession.sessionseq}`}
                                  className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 pr-2 pt-2 "
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
                                      setSpeaker1Social(
                                        seqsession.speaker1_social
                                      );
                                      setSpeaker2Social(
                                        seqsession.speaker2_social
                                      );
                                      setTrack(seqsession.trackid);
                                      setOrganization1(seqsession.organization1);
                                      setOrganization2(seqsession.organization2);
                                      setSessionNo(seqsession.sessionseq);
                                      onOpen();
                                    }}
                                    className=" rounded cursor-pointer bg-white border border-slate-300 p-2 h-full flex flex-col justify-between"
                                  >
                                    <p className="text-blue-600 underline text-xs font-semibold mt-2">
                                      {seqsession.sessiontitle}
                                    </p>
                                    <p className="text-xs text-gray-800 mt-2 line-clamp-3 mb-2">
                                      {seqsession.description}
                                    </p>
                                    <hr />
                                    <p className="text-xs font-semibold text-gray-500 mt-2 mb-2">
                                      {seqsession.speaker2
                                        ? seqsession.speaker1 +
                                        " | " +
                                        seqsession.speaker2
                                        : seqsession.speaker1}
                                    </p>

                                    <hr />
                                    <div>
                                      <h4 className="text-xs mt-2 font-bold text-gray-700">
                                        {seqsession.trackid}
                                      </h4>
                                      {/* <p className="text-xs text-gray-500">
                                        {seqsession.tracktitle}
                                      </p> */}
                                    </div>
                                  </div>
                                </div>
                              );
                              break;
                          }
                        })
                      ) : (
                        <div
                          key="track.sessionseq"
                          className="rounded mb-0 mr-2 mx-0 z-1 flex items-center justify-items-center w-full text-center bg-white border border-slate-300"
                        >
                          <div className="p-3">
                            <label className="text-gray-600">
                              {" "}
                              {session.tracktitle}
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div id="hands-on">
          <h2 className="text-4xl font-bold my-4  text-sky-900">Hands-on</h2>
          {/* Add content for Hands-on here */}
        </div>
      </div>
    </div>
  );
};

export default AgendaUI;
