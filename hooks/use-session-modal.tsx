import { create } from 'zustand';

interface useStoreSession {
    isOpen: boolean;
    tracktitle: string;
    trackdesc: string;
    session: string;
    sessiondesc: string;
    onOpen: () => void;
    onClose: () => void;
    setTrackTitle: (title: string) => void;
    setTrackDescription: (value: string) => void;
    setSessionTitle: (value: string) => void;
    setSessionDesc: (value: string) => void;
}

export const useSession = create<useStoreSession>((set) => ({
    isOpen: false,
    tracktitle: "",
    trackdesc: "",
    session: "",
    sessiondesc: "",
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setTrackTitle: (title: string) => set({ tracktitle: title }),
    setTrackDescription: (value: string) => set({ trackdesc: value }),
    setSessionTitle: (value: string) => set({ session: value }),
    setSessionDesc: (value: string) => set({ sessiondesc: value })
}));