const page = ({ params }: { params: { blogid: string } }) => {
  return (
    <div>
      <h1>this {params.blogid}</h1>
    </div>
  );
};

export default page;
