import { Metadata } from "next";
type Props = {
  params: {
    blogid: string[];
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog ${params.blogid}`,
  };
};
const page = ({ params }: Props) => {
  return (
    <div>
      <h1>this {params.blogid}</h1>
    </div>
  );
};

export default page;
