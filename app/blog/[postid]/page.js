export default async function PostIdPage({ params, searchParams }) {
  const postid = (await params).postid;
  const search = (await searchParams).search;

  return <h1>Hello Post Id {postid} {search}</h1>
}
