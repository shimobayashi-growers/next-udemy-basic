// 型を定義
type Params = {
    params: Promise<{
        id: string
    }>
}

export async function generateMetadata({ params }: Params) {
    const {id} = await params;
    return {
        title: `Blog ${id}`,
        description: `Blog ${id}`,
    }
}

export default async function page({ params }: Params ) {
  const {id} = await params;
  
    return (
        <div>
            <h1>Blog</h1>
            <p>{id}</p>
        </div>
  )
}