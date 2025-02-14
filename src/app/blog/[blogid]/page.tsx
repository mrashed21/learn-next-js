"use client";
import { useRouter } from "next/navigation";
type Props = {
  params: {
    blogid: string[];
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Blog ${params.blogid}`,
//   };
// };
const page = ({ params }: Props) => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>this {params.blogid}</h1>
      <button onClick={handleRoute}>Go Home</button>
    </div>
  );
};

export default page;
