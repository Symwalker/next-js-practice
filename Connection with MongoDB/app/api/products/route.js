import { ConnectionSTR } from "@/utils/db";
import { Product } from "@/utils/models/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect(ConnectionSTR)
    .then(res => console.log("mongodb connect"))
    .catch(err => console.log(err, "error"))

    const data = await Product.find({})
    console.log(data);
    return NextResponse.json({
        message:data
    })
}