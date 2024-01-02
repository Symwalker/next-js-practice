
import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const data = user.filter((item)=>item.id == content.params.id)
    console.log(data);
    // const data = user
    return NextResponse.json(data.length ==0?{success:false,data:"no user Found"}: {data:data[0],status:200})
    // return NextResponse.json(user, {status:200})

}