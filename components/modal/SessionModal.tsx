"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from '@/components/ui/dialog';

import { useSession } from '@/hooks/use-session-modal';

interface ModalProps {
    track: string;
    tracktitle: string;
    session: string;
    sessiondetail: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const SessionModal: React.FC<ModalProps> = ({
    track,
    tracktitle,
    session,
    sessiondetail,
    isOpen,
    onClose,
    children
}) => {

    const sessiondata = useSession();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open={sessiondata.isOpen} onOpenChange={sessiondata.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{sessiondata.tracktitle}</DialogTitle>
                    <DialogDescription>
                        {sessiondata.session}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <p>{sessiondata.sessiondesc}</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SessionModal;
