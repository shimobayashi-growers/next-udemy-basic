import ClientComponent from "@/components/ClientComponent";

export default function ServerComponent() {
    console.log("Server Component");
    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
        </div>
    )
}