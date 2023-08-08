import { NextResponse } from 'next/server';
import Sponsors from "@/data/sponsors.json";

export async function GET(req: Request) { 
    return NextResponse.json(Sponsors);
}