import ClientComponent from "@/components/ClientComponent";
import Link from "next/link";

export default function ServerComponent() {
    console.log("Server Component");
    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
            {/* rscの場合はLinkを使う */}
            <Link href="/rcc">Client Component</Link>
        </div>
    )
}