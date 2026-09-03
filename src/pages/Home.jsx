function Home() {
  const blogs = [
    {
      id: 1,
      title: "Learn React in 2026",
      description: "A beginner friendly guide to learning React.",
      author: "Milan",
    },
    {
      id: 2,
      title: "Why JavaScript is Important",
      description: "Learn why JavaScript is one of the most popular languages.",
      author: "Milan",
    },
    {
      id: 3,
      title: "Getting Started with Web Development",
      description: "Start your journey as a web developer.",
      author: "Milan",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to MyBlog
          </h1>

          <p className="text-gray-600 text-lg">
            Share your ideas. Read interesting blogs. Learn something new.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {blog.description}
              </p>

              <p className="text-sm text-gray-500">
                By {blog.author}
              </p>

              <button className="mt-5 bg-gray-900 text-white px-4 py-2 rounded-lg">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;