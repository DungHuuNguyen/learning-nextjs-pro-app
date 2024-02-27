import Header from "@/components/common/header";
import { AdminLayout, MainLayout } from "@/components/layout";
import { useRouter } from "next/router";
import * as React from "react";
// import dynamic from "next/dynamic";

// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: true,
// });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = React.useState([]);
  const router = useRouter();
  const page = router.query?.page;

  console.log(router.query, "about query");

  React.useEffect(() => {
    if (!page) return;

    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  const handleNextClick = () => {
    router.push({
      pathname: "/about",
      query: {
        page: (Number(page) || 0) + 1,
      },
    });
  };

  return (
    <div className="about-page">
      <h1>About page</h1>
      <Header />

      {/* xu ly phia client cai nay, may cai khac build trc tren server */}
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Next page</button>
    </div>
  );
}

AboutPage.Layout = AdminLayout;

export async function getStaticProps() {
  console.log("get static props");

  return {
    props: {},
  };
}

// khi có fnc này xuất hiện => sẽ ko còn ASO nữa <Automatic static optimization>
// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
