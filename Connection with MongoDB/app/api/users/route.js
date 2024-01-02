import { user } from "@/utils/db";
import { NextResponse } from "next/server";


//GET API
export function GET(request){
    const data = user
    return NextResponse.json(data, {status:200})

}


// POST API
export async function POST (request){
    const payload = await request.json() // request.json() returns a PROMISE, so we need to use ASYNC/AWAIT
    if (!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({
            result:"Required fields are not found",
            success : false,
        },{status:400})
    }
    return NextResponse.json({
        result:"user created",
        success : true,
    },
    {status:200})

}