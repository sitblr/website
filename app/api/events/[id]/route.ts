import { NextResponse } from 'next/server';
import Events from "@/data/event.json";

export async function GET(req: Request) {
    const id = req.url.split("/events/")[1]; 
    console.log("@/data/generator_data/"+id+".json");
    const data = require("@/data/generator_data/"+id+".json")
    const event = Events.find((evt) => {
        if(evt.id === id){
            return true
        }
    })
    event.sessions = data;
    return NextResponse.json(event);
}