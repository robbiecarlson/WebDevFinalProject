"use client";
import Item from './item';
import { useState } from "react";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("score");

    const sortedItems = [...items];

    if (sortBy === "score") {
        sortedItems.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    } else if (sortBy === "grouped category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }
    const groupedItems = sortedItems.reduce((group, item) => {
        const category = item.category;
        if (group[category] === undefined) {
            group[category] = [];}
        group[category].push(item);
        return group;
    }, {});

    return (
    <div>
        <div className="flex m-4 items-center">
            <label className='mr-2'>Sort by:</label>
            <button
                className={`px-6 py-2 mr-1 rounded-xl ${sortBy === 'score' ? 'bg-green-500' : 'bg-gray-500'}`}
                onClick={() => setSortBy('score')}
            >
            Score
            </button>
            <button
                className={`px-6 py-2 mr-1 rounded-xl ${sortBy === 'grouped category' ? 'bg-green-500' : 'bg-gray-500'}`}
                onClick={() => setSortBy('grouped category')}
            >
            Genre
            </button>
        </div>
    
            {sortBy === 'grouped category' ? (
                Object.keys(groupedItems).map((category) => (
                    <div key={category}>
                        <h2 className="capitalize text-2xl ml-4 font-semibold">{category}</h2>
                        {groupedItems[category].map((item) => (
                            <Item key={item.id} name={item.name} score={item.score} category={item.category} />
                        ))}
                    </div>
                ))
            ) : (sortedItems.map((item) => (
                    <Item key={item.id} 
                        name={item.name} 
                        score={item.score} 
                        category={item.category} />))
            )}
    </div>
    );
}