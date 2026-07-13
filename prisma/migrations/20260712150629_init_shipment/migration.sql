-- CreateTable
CREATE TABLE "Shipment" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shipmentDate" TIMESTAMP(3) NOT NULL,
    "itemName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pricePerUnit" INTEGER NOT NULL,
    "driver" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "deliveredAt" TIMESTAMP(3),
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);
