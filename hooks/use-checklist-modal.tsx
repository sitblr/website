import { create } from 'zustand';

interface useStoreSession {
    tracktitle: string;
    trackdesc: string;
    track: string; 
    session: string;
    sessionno: string;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void; 
    setTrackTitle: (title: string) => void;
    setSessionTitle: (value: string) => void;
    setSessionNo: (value: string) => void;
    setTrack: (value: string) => void;
}

export const usechecklist = create<useStoreSession>((set) => ({
    tracktitle: "",
    trackdesc: "",
    session: "",
    sessionno: "",
    track:"",
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setTrackTitle: (title: string) => set({ tracktitle: title }),
    setTrackDescription: (value: string) => set({ trackdesc: value }),
    setSessionTitle: (value: string) => set({ session: value }),
    setSessionNo: (value: string) => set({ sessionno: value }),
    setTrack: (value: string) => set({ track: value })
}));