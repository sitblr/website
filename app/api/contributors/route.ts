import { NextResponse } from 'next/server';
import Contributors from "@/data/contributors.json";

export async function GET(req: Request) { 
    return NextResponse.json(Contributors);
}