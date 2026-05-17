import { Fragment } from "react";

export default async function Dog({ searchParams }) {
  const query = await searchParams;
  const breed = query.breed;
  const dogResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const dog = await dogResponse.json();

  return <Fragment>
    <h1>Random dog for {breed}</h1>
    <img src={dog.message} alt="" />
  </Fragment>
}
