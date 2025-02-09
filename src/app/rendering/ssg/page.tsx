import Image from "next/image";

// SSG（StaticSiteGeneration）
export default async function SSGPage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');

    const data = await res.json(); // レスポンスをJSONに変換
    const image = data.message; // 画像URL
    const timestamp = new Date().toISOString(); // タイムスタンプ

    return (
        <div>
            <h1>SSG ビルド時に生成され固定</h1>
            <p>{timestamp}</p>
            <Image src={image} alt="dog" width={500} height={500} />
        </div>
    )
} 