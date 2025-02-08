'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientComponent() {
    const [ count, setCount ] = useState(0);
    const router = useRouter();
    
    console.log("Client Component");
    return (
        <div>
            <h1>Client Component</h1>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
            {/* rscの場合はrouterを使う */}
            <button onClick={() => router.push("/rsc")}>
                Server Component
            </button>
        </div>
    )
}