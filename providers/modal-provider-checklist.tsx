"use client";

import { useEffect, useState } from "react";

import ChecklistModal from '@/components/modal/ChecklistModal';
import { usechecklist } from '@/hooks/use-checklist-modal';

export const ModalProviderChecklist = () => {
    const sessiondata = usechecklist();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <ChecklistModal isOpen onClose={() => { } } track="" tracktitle="" sessionno="" session=""></ChecklistModal>
        </>
    )

}