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
            <SessionModal speaker1="" speaker1_social="" speaker2="" speaker2_social="" track="" tracktitle={sessiondata.tracktitle} session="" sessionno="" sessiondetail="" speakers="" organization="" isOpen onClose={() => { }}></SessionModal>
        </>
    )

}