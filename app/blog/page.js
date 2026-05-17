export default async function Blog() {
  const blogResponse = await fetch("https://api.vercel.app/blog");
  const blog = await blogResponse.json();
  const categories = blog.map(entry => entry.category);
  const uniqueCategories = [...(new Set(categories))];

  return <ul>
    {uniqueCategories.map(category => {
      return <li key={category}>{category}</li>
    })}
  </ul>
}
