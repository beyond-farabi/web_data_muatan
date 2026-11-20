import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const body = await request.json();

    const shipment = await prisma.shipment.create({
        data: {
            title: body.title,
            shipmentDate: new Date(body.shipmentDate),
            itemName: body.itemName,
            quantity: Number(body.quantity),
            pricePerUnit: Number(body.pricePerUnit),
            driver: body.driver,
            owner: body.owner
        },
    });

    return NextResponse.json(shipment, { status: 201 });
}