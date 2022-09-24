import React from "react";

const News = ({ data }) => {
  return (
    <div>
      <h1 className="content">{data}</h1>
    </div>
  );
};

export default News;

export async function getStaticProps(context) {
  return {
    props: {
      data: context.preview
        ? "List of draft artices"
        : "List of published articles",
    },
  };
}
