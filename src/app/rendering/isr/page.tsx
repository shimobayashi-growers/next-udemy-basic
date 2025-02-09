import Image from "next/image";
export const revalidate = 10; // ISR（IncrementalStaticRegeneration）

export default async function ISRPage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random',{
        next: {
            revalidate: 10, // 10秒ごとに更新
        }
    });

    const data = await res.json(); // レスポンスをJSONに変換
    const image = data.message; // 画像URL
    const timestamp = new Date().toISOString(); // タイムスタンプ

    return (
        <div>
            <h1>ISR 10秒ごとにリロード</h1>
            <p>{timestamp}</p>
            <Image src={image} alt="dog" width={500} height={500} />
        </div>
    )
} 