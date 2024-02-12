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
    sessionno: string;
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
    sessionno,
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
                <hr></hr>
                <div >
                    <p className='flex sm:flex-none flex-col sm:flex-row space-y-1.5 text-center sm:text-left text-xs text-gray-500'><span className="inline font-semibold text-gray-600 space-x-4">{sessiondata.track}:‎ ‎ </span> {sessiondata.tracktitle}</p>
                    <p className='flex sm:flex-none flex-col sm:flex-row space-y-1.5 text-center sm:text-left text-xs text-gray-500'><span className="inline font-semibold text-gray-600 space-x-4">Speakers:‎ ‎ </span> {sessiondata.speakers} ({sessiondata.organization})</p>
                </div>
                <hr></hr>
                <a className="text-center px-2 text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
                    href={`https://docs.google.com/forms/d/e/${sessiondata.sessionFeedbackURL}/viewform?usp=pp_url&entry.1161658033=${sessiondata.track}&entry.973977996=${sessiondata.sessionno}&entry.749693569=${encodeURIComponent(sessiondata.tracktitle)}&entry.96440064=${encodeURIComponent(sessiondata.session)}`} target="_blank" rel="noopener noreferrer">Give Your Feedback</a>
            </DialogContent>
        </Dialog>
    )
}

export default SessionModal;
