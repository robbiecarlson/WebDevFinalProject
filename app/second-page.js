import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function SecondPage() {
    const [items, setItems] = useState([]);
    const router = useRouter();

    return (
        <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
        <div>
           
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
