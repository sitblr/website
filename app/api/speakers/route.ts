import { NextResponse } from 'next/server';
import Speakers from "@/data/speakers.json";

export async function GET(req: Request) { 
    return NextResponse.json(Speakers);
}