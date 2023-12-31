"use client";

import { useState } from "react";
//import { useRouter } from 'next/router';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    //const router = useRouter();

    const handleAddItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
        //router.push('/second-page');
    };

    return (
        <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
        <div>
            <div>
                <h1 className="text-4xl ml-10 mt-4 font-bold justify-center">Screen Score</h1>
            </div>
            <div className="mt-4 flex item-center justify-center w-full">
                <div className="justify-center">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} />
                </div>
            </div>
        </div>
        </main>
    );
}
