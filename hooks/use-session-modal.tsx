import { create } from 'zustand';

interface useStoreSession {
    isOpen: boolean;
    tracktitle: string;
    trackdesc: string;
    track: string;
    speakers: string;
    organization: string;
    session: string;
    sessiondesc: string;
    sessionno: string;
    onOpen: () => void;
    onClose: () => void;
    setTrackTitle: (title: string) => void;
    setTrackDescription: (value: string) => void;
    setSessionTitle: (value: string) => void;
    setSessionDesc: (value: string) => void;
    setSessionNo: (value: string) => void;
    setSpeakers: (value: string) => void;
    setOrganization: (value: string) => void;
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
    speakers: "",
    organization: "",
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setTrackTitle: (title: string) => set({ tracktitle: title }),
    setTrackDescription: (value: string) => set({ trackdesc: value }),
    setSessionTitle: (value: string) => set({ session: value }),
    setSessionDesc: (value: string) => set({ sessiondesc: value }),
    setSessionNo: (value: string) => set({ sessionno: value }),
    setSpeakers: (value: string) => set({ speakers: value }),
    setOrganization: (value: string) => set({ organization: value }),
    setTrack: (value: string) => set({ track: value })
}));