import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
    const {name ,price} = await req.json();

    await prisma.product.create({
        data : {
            name: name,
            price: price
        }
    })

    return NextResponse.json({message: 'success'})

    } catch (err) {
        console.log(err);
        return NextResponse.json({message: err})
    }

}