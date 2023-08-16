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
    speakers: string;
    organization: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const SessionModal: React.FC<ModalProps> = ({
    track,
    tracktitle,
    session,
    sessiondetail,
    speakers,
    organization,
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
                    <DialogTitle>{sessiondata.session}</DialogTitle>
                    <DialogDescription>
                        {sessiondata.sessiondesc}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <p className='text-xs text-gray-500'><span className="inline font-semibold text-gray-600">{sessiondata.track}:</span> {sessiondata.tracktitle}</p>
                    <p className='text-xs text-gray-500'><span className="inline font-semibold text-gray-600">Speakers:</span> {sessiondata.speakers} ({sessiondata.organization})</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SessionModal;
