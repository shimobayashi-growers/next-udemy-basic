import { getContact, getContacts } from "@/lib/contact"


export default async function ListPage() {
    const contacts = await getContacts()
    const first = await getContact("1")
    return (
        <div>
            <h1>Contacts List</h1>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name} : {contact.email}
                    </li>
                ))}
            </ul>

            <h1>Contact</h1>
            <div>
                <p>{first ? first.name : "登録されていません"}</p>
                <p>{first ? first.email : "登録されていません"}</p>
            </div>
        </div>
    )
}