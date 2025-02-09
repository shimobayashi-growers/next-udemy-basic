import Image from "next/image";

export const dynamic = 'force-dynamic'; // SSR強制

// SSRの場合はasyncをつける
export default async function SSRPage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        cache: 'no-store', // キャッシュしない
    });

    const data = await res.json(); // レスポンスをJSONに変換
    const image = data.message; // 画像URL
    const timestamp = new Date().toISOString(); // タイムスタンプ

    return (
        <div>
            <h1>SSR リロードで毎回生成</h1>
            <p>{timestamp}</p>
            <Image src={image} alt="dog" width={500} height={500} />
        </div>
    )
} 