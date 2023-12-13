"use client";

import { useState } from "react";

export default function NewItem({ onAddItem}) {
    const [name, setName] = useState("");
    const [score, setScore] = useState(1);
    const [category, setCategory] = useState("Action");

    const handleSubmit = (event) => {
        event.preventDefault();
        const NewItem = {
            name,
            score,
            category,
        };
        onAddItem(NewItem);

        setName("");
        setScore(1);
        setCategory("Action");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleScoreChange = (event) => {
        setScore(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <div className="mt-4 flex item-center justify-center w-full">
                <div className="w-full max-w-md rounded-xl bg-white p-6">   
                    <h1 className="text-2xl font-bold text-black">
                    ⭐Rate A Film⭐
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            required
                            onChange={handleNameChange}
                            value={name}
                            placeholder="Film Name"
                            className="mt-2 p-1 block w-full rounded-md bg-slate-100 text-black"
                        />
                        <div className="flex justify-between">
                            <input type="number" min="1" max="10"
                                required
                                onChange={handleScoreChange}
                                value={score}
                                className="mt-2 p-1 block w-20 rounded-md bg-slate-100 text-black"
                            />
                            <select 
                                required                            
                                onChange={handleCategoryChange}
                                value={category}
                                className="mt-2 p-1 block w-50 rounded-md bg-slate-100 text-black"
                            >
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Other">Other</option>
                            </select>
                            </div>

                        <button type="submit" className="w-full rounded-xl mt-2 py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}