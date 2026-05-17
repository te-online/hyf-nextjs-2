export default async function Blogs({ params }) {
  const urlParams = await params;

  return <h1>Blog {urlParams.postname}</h1>
}
