import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [blogs, setBlogs] = useState([]);


    // =========================
    // GET ALL BLOGS
    // =========================

    useEffect(() => {

        const getBlogs = async () => {

            try {

                const response = await fetch(
                    "http://localhost:8080/api/blogs"
                );

                const data = await response.json();

                setBlogs(data);

            } catch (error) {

                console.log(error);

            }

        };

        getBlogs();

    }, []);


    // =========================
    // DELETE BLOG
    // =========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blog?"
        );

        if (!confirmDelete) {
            return;
        }


        try {

            const response = await fetch(
                `http://localhost:8080/api/blogs/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();


            if (response.ok) {

                alert("Blog deleted successfully");

                setBlogs(
                    blogs.filter((blog) => blog._id !== id)
                );

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="bg-gray-100 min-h-screen p-8">

            <div className="max-w-6xl mx-auto">


                {/* HEADER */}

                <div className="text-center py-12">

                    <h1 className="text-5xl font-bold mb-4">
                        Welcome to MyBlog
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Share your ideas. Read interesting blogs.
                        Learn something new.
                    </p>

                </div>


                {/* CREATE BUTTON */}

                <div className="mb-8">

                    <Link
                        to="/create-blog"
                        className="bg-green-600 text-white px-5 py-3 rounded-lg"
                    >
                        + Create Blog
                    </Link>

                </div>


                {/* TITLE */}

                <h2 className="text-3xl font-bold mb-6">
                    Latest Blogs
                </h2>


                {/* BLOG GRID */}

                <div className="grid md:grid-cols-3 gap-6">

                    {blogs.map((blog) => (

                        <div
                            key={blog._id}
                            className="bg-white p-6 rounded-xl shadow"
                        >


                            {/* TITLE */}

                            <h3 className="text-xl font-bold mb-3">
                                {blog.title}
                            </h3>


                            {/* CONTENT */}

                            <p className="text-gray-600 mb-4">
                                {blog.content}
                            </p>


                            {/* CATEGORY */}

                            <p className="text-sm text-gray-500 mb-5">
                                Category: {blog.category}
                            </p>


                            {/* READ MORE */}

                            <Link
                                to={`/blog/${blog._id}`}
                                className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block"
                            >
                                Read More
                            </Link>


                            {/* EDIT */}

                            <Link
                                to={`/edit-blog/${blog._id}`}
                                className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
                            >
                                Edit
                            </Link>


                            {/* DELETE */}

                            <button
                                onClick={() => handleDelete(blog._id)}
                                className="ml-2 mt-3 bg-red-600 text-white px-4 py-2 rounded-lg"
                            >
                                Delete
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default Home;