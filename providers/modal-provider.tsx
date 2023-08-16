"use client";

import { useEffect, useState } from "react";

import SessionModal from '@/components/modal/SessionModal';
import { useSession } from '@/hooks/use-session-modal';

export const ModalProvider = () => {
    const sessiondata = useSession();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <SessionModal track="" tracktitle={sessiondata.tracktitle} session="" sessiondetail="" speakers="" organization="" isOpen onClose={() => { }}></SessionModal>
        </>
    )

}