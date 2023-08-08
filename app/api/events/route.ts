import { NextResponse } from 'next/server';
import Events from "@/data/event.json";

export async function GET(req: Request) { 
    const search = req.url.split("?search=")[1]; 
    if(search === 'active' || search === 'Active'){
        const event = Events.find((event) => {
            if(event.active) { return true }
        });
        return NextResponse.json(event);
    }
    console.log(search);
    return NextResponse.json(Events);
}