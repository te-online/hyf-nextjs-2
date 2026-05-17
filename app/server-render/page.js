import blog from '../blog.json';

export default function ServerComponent() {
  return <>
    <h1>On the server</h1>
    {blog.map(entry => {
      return <article key={entry.id}>
        <h2>{entry.title}</h2>
        <p>{entry.category}</p>
      </article>
    })}
  </>
}
