'use client'

import blog from '../blog.json';

export default function ClientComponent() {
  return <>
    <h1>On the client</h1>
    {blog.map(entry => {
       return <article key={entry.id}>
         <h2>{entry.title}</h2>
         <p>{entry.category}</p>
       </article>
    })}
  </>
}
