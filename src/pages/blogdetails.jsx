import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      const response = await fetch(
        `http://localhost:8080/api/blogs/${id}`
      );

      const data = await response.json();

      console.log(data);

      setBlog(data);
    };

    getBlog();
  }, [id]);

  if (!blog) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-500 mb-6">
          Category: {blog.category}
        </p>

        <p className="text-lg text-gray-700">
          {blog.content}
        </p>

      </div>
    </div>
  );
}

export default BlogDetails;