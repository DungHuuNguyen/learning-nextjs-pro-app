import { useRouter } from "next/router";
import * as React from "react";

export interface ParamsPageProps {}

export default function ParamsPage(props: ParamsPageProps) {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>ParamsPage</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // fake slow query
  console.log("get server side");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    props: {},
  };
}
