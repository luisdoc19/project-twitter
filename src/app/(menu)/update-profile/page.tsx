import React from "react";

export const dynamic = "force-dynamic";

const page = ({ searchParams }: { searchParams: Object }) => {
  console.log(searchParams);
  return <div>page</div>;
};

export default page;
