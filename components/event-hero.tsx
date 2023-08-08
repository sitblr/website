const EventHero = () => {

    return (
        <div>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    <div className="bg-blue-300 text-white text-center rounded-md">
                        <div className="bg-[#15314b] font-medium p-2">
                            <div className="flex items-start">Host</div>
                        </div>
                        <div>
                            <h4>Details of the event to be specified here..</h4>
                        </div>
                    </div>
                    <div className="bg-blue-300 text-white text-center">
                        <div className="bg-[#02203c] font-medium p-2">
                            <div className="flex items-start">Location</div>
                        </div>
                        <div>
                            <h4>Details about event organizers</h4>
                        </div>
                    </div>
                    <div className="bg-blue-300 text-white text-center">
                        <div className="bg-[#02203c] font-medium p-2">
                            <div className="flex items-start">When</div>
                        </div>
                        <div>
                            <h4>When the event is going to take place with timer</h4>
                        </div>
                    </div>
                    <div className="bg-blue-300 text-white text-center">
                        <div className="bg-[#02203c] font-medium p-2">
                            <div className="flex items-start">Where</div>
                        </div>
                        <div>
                            <h4>Where the event is going to take place</h4>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default EventHero;