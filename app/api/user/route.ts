import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export function GET(req : NextRequest){
    return NextResponse.json({
        email : "ajay@gmail.com",
        name : "ajay"
    })
}

export async function POST(req: NextRequest){

    const body = await req.json();

    return NextResponse.json({
        body
    })
}