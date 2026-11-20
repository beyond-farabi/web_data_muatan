"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ShipmentForm() {
    const [title, setTitle] = useState("");
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pricePerUnit, setPricePerUnit] = useState("");
    const [driver, setDriver] = useState("");
    const [owner, setOwner] = useState("");
    const [shipmentDate, setShipmentDate] = useState("");
    const [saving, setSaving] = useState(false);

    const router = useRouter();

    async function handleSubmit() {
        setSaving(true);

        await fetch("/api/shipments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                shipmentDate,
                itemName,
                quantity,
                pricePerUnit,
                driver,
                owner, 
            }),
        });

        setTitle("");
        setItemName("");
        setQuantity("");
        setPricePerUnit("");
        setDriver("");
        setOwner("");
        setShipmentDate("");
        setSaving(false);

        router.refresh();
    }

    return (
        <div className="mt-8 border-t border-neutral-200 pt-6">
            <div className="grid grid-cols-2 gap-3">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Judul"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm"
                />

                <input 
                    type="date"
                    value={shipmentDate}
                    onChange={(e) => setShipmentDate(e.target.value)}
                    placeholder="Jenis barang"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm"
                />

                <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Jumlah"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm"
                />

                <input 
                    type="number"
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(e.target.value)}
                    placeholder="Harga satuan"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm"
                />

                <input 
                    value={driver}
                    onChange={(e) => setDriver(e.target.value)}
                    placeholder="Sopir"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm"
                />

                <input
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="Pemilik"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm"
                />
            </div>
            <button
                onClick={handleSubmit}
                disabled={saving}
                className="mt-3 rounded-md border border-neutral-300 px-3 py-1.5 text-sm disabled: opacity-50"
            >
                {saving ? "Menyimpan..." : "Simpan"}
            </button>
        </div>
    );
}