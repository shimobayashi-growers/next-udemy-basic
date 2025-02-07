export default async function page({ params }: { params: { id: string } }) {
  console.log(params);
  const {id} = await params;
  
    return (
        <div>
            <h1>Blog</h1>
            <p>{id}</p>
        </div>
  )
}