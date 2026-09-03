import { Link } from "react-router-dom";

function Dashboard() {
  const blogs = [
    {
      id: 1,
      title: "My First Blog",
      date: "September 1, 2026",
    },
    {
      id: 2,
      title: "Learning React",
      date: "September 2, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your blogs
            </p>
          </div>

          <Link
            to="/create-blog"
            className="bg-gray-900 text-white px-5 py-3 rounded-lg"
          >
            + Create Blog
          </Link>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="p-5 border-b">
            <h2 className="text-xl font-bold">
              My Blogs
            </h2>
          </div>

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-5 border-b flex justify-between items-center"
            >

              <div>
                <h3 className="font-bold text-lg">
                  {blog.title}
                </h3>

                <p className="text-gray-500">
                  {blog.date}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Delete
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;