import { create } from 'zustand';

interface useStoreSession {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const usechecklist = create<useStoreSession>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));