import { create } from 'zustand';

interface useStoreSession {
    isOpen: boolean;
    tracktitle: string;
    trackdesc: string;
    track: string;
    speakers: string;
    speaker1: string;
    speaker2: string;
    speaker1_social: string;
    speaker2_social: string;
    organization1: string;
    organization2: string;
    session: string;
    sessiondesc: string;
    sessionno: string;
    sessionFeedbackURL: string;
    onOpen: () => void;
    onClose: () => void;
    setTrackTitle: (title: string) => void;
    setTrackDescription: (value: string) => void;
    setSessionTitle: (value: string) => void;
    setSessionDesc: (value: string) => void;
    setSessionFeedbackURL: (value: string) => void;
    setSessionNo: (value: string) => void;
    setSpeakers: (value: string) => void;
    setSpeaker1: (value: string) => void;
    setSpeaker2: (value: string) => void;
    setSpeaker1Social: (value: string) => void;
    setSpeaker2Social: (value: string) => void;
    setOrganization1: (value: string) => void;
    setOrganization2: (value: string) => void;
    setTrack: (value: string) => void;
}

export const useSession = create<useStoreSession>((set) => ({
    isOpen: false,
    tracktitle: "",
    trackdesc: "",
    session: "",
    sessiondesc: "",
    sessionno: "",
    track:"",
    sessionFeedbackURL:"",
    speakers: "",
    organization1: "",
    organization2: "",
    speaker1: "",
    speaker2: "",
    speaker1_social: "",
    speaker2_social: "",
    setSpeaker1: (value: string) => set({ speaker1: value }),
    setSpeaker2: (value: string) => set({ speaker2: value }),
    setSpeaker1Social: (value: string) => set({ speaker1_social: value }),
    setSpeaker2Social: (value: string) => set({ speaker2_social: value }),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setTrackTitle: (title: string) => set({ tracktitle: title }),
    setTrackDescription: (value: string) => set({ trackdesc: value }),
    setSessionTitle: (value: string) => set({ session: value }),
    setSessionDesc: (value: string) => set({ sessiondesc: value }),
    setSessionNo: (value: string) => set({ sessionno: value }),
    setSpeakers: (value: string) => set({ speakers: value }),
    setOrganization1: (value: string) => set({ organization1: value }),
    setOrganization2: (value: string) => set({ organization2: value }),
    setSessionFeedbackURL: (value: string) => set({ sessionFeedbackURL: value }),
    setTrack: (value: string) => set({ track: value })
}));