'use client'

import { useState } from "react";

export default function ClientComponent() {
    const [ count, setCount ] = useState(0);

    console.log("Client Component");
    return (
        <div>
            <h1>Client Component</h1>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    )
}