import { useState } from "react";

function CreateBlog() {

  const [formData, setFormData] = useState({
    title: "",
    category: "Technology",
    content: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8080/api/blogs/create",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Create Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block font-medium mb-2">
              Blog Title
            </label>

            <input
              type="text"
              placeholder="Enter blog title"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            />
          </div>


          <div>
            <label className="block font-medium mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            >
              <option>Technology</option>
              <option>Programming</option>
              <option>Education</option>
              <option>Travel</option>
              <option>Other</option>
            </select>
          </div>


          <div>
            <label className="block font-medium mb-2">
              Blog Content
            </label>

            <textarea
              rows="10"
              placeholder="Write your blog here..."
              name="content"
              value={formData.content}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            ></textarea>
          </div>


          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg"
          >
            Publish Blog
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateBlog;