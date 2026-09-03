function CreateBlog() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Create Blog
        </h1>

        <form className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Blog Title
            </label>

            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Category
            </label>

            <select className="w-full border p-3 rounded-lg">
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