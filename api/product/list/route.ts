import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
const prisma = new PrismaClient();

export async function GET() {

    try {
        const products = await prisma.product.findMany({
            orderBy: {
                id: 'desc'
            }


        })


        return NextResponse.json(products);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: err })
    }
}
