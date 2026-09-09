import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {

    const { id } = useParams();

    const navigate = useNavigate();


    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");


    // =========================
    // GET OLD BLOG DATA
    // =========================

    useEffect(() => {

        const getBlog = async () => {

            try {

                const response = await fetch(
                    `http://localhost:8080/api/blogs/${id}`
                );

                const data = await response.json();


                if (response.ok) {

                    setTitle(data.title);
                    setCategory(data.category);
                    setContent(data.content);

                } else {

                    alert(data.message);

                }

            } catch (error) {

                console.log(error);

            }

        };

        getBlog();

    }, [id]);


    // =========================
    // UPDATE BLOG
    // =========================

    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            const response = await fetch(
                `http://localhost:8080/api/blogs/${id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title: title,
                        category: category,
                        content: content
                    })
                }
            );


            const data = await response.json();


            if (response.ok) {

                alert("Blog updated successfully");

                navigate(`/blog/${id}`);

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="bg-gray-100 min-h-screen p-8">

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">


                <h1 className="text-3xl font-bold mb-6">
                    Edit Blog
                </h1>


                <form onSubmit={handleSubmit}>


                    {/* TITLE */}

                    <label className="block mb-2 font-semibold">
                        Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-3 rounded-lg mb-5"
                        required
                    />


                    {/* CATEGORY */}

                    <label className="block mb-2 font-semibold">
                        Category
                    </label>

                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border p-3 rounded-lg mb-5"
                        required
                    />


                    {/* CONTENT */}

                    <label className="block mb-2 font-semibold">
                        Content
                    </label>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="8"
                        className="w-full border p-3 rounded-lg mb-5"
                        required
                    />


                    {/* UPDATE BUTTON */}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                    >
                        Update Blog
                    </button>


                </form>

            </div>

        </div>

    );
}

export default EditBlog;