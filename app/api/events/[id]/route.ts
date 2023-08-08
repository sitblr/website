import { NextResponse } from 'next/server';
import Events from "@/data/event.json";

export async function GET(req: Request) {
    const id = req.url.split("/events/")[1]; 
    console.log(id);
    const event = Events.find((evt) => {
        if(evt.id === id){
            return true
        }
    })
    return NextResponse.json(event);
}