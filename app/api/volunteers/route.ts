import { NextResponse } from 'next/server';
import Volunteers from "@/data/volunteers.json";

export async function GET(req: Request) { 
    return NextResponse.json(Volunteers);
}