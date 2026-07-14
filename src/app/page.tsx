import { prisma } from "@/lib/prisma";

export default async function Home() {
  const shipments = await prisma.shipment.findMany({
    orderBy: { shipmentDate: "desc" },
  });

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-lg font-medium">Pengiriman</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {shipments.length} catatan
      </p>

      <ul className="mt-6">
        {shipments.map((s) => (
          <li key={s.id} className="border-b border-neutral-200 py-3">
            <span>{s.title}</span>
            <span className="ml-4 text-neutral-500">{s.itemName}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}