import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;

  console.log(user, "dasf");
  console.log(user, "dasf");
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
}
