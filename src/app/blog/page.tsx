// ダミーデータ
const articles = [
    {
        id: 1,
        title: "Article 1",
    },
    {
        id: 2,
        title: "Article 2",
    },
    {
        id: 3,
        title: "Article 3",
    },
]

// 3秒待機
async function fetchArticles() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return articles;
}

export default async function BlogPage() {
    const articles = await fetchArticles();
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {articles.map(
                    (article) => (
                    <li key={article.id}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}