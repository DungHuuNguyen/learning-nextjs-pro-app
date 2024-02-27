import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ fontSize: "2rem", textAlign: "center" }}>...Loading...</div>
    );
  }

  if (!post) return null;

  return (
    <div>
      <h1>PostDetailPage</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("/n get static paths");
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  console.log([
    data.data.map((post: any) => ({ params: { postId: post.id } })),
  ]);

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("/n get static props", context.params?.postId);
  const postId = context.params?.postId;

  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
