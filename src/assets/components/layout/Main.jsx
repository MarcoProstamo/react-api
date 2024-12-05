import { useState, useEffect } from "react";
import CardList from "../CardList";
import BadgeList from "../BadgeList";
import { uniqueTags as badgeList } from "../../data/uniqueTags";

const formInitialData = {
  author: "",
  content: "",
  isPublic: false,
  tags: [],
  title: "",
  category: "",
};

export default function Main() {
  async function fetchPosts() {
    return await fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setCardList(data);
      });
  }

  const [formData, setFormData] = useState(formInitialData);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    if (formData.isPublic) alert("Public Post!");
  }, [formData.isPublic]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleFormChange(e) {
    const newFormData = {
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    setFormData(newFormData);
  }

  function retrieveTags(tags) {
    return tags;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newCard = {
      author: formData.author,
      content: formData.content,
      id: cardList.length + 1,
      image: "https://placehold.co/600x400",
      isPublic: formData.isPublic,
      tags: retrieveTags(),
      title: formData.title,
      category: formData.category,
    };

    const newCardList = [...cardList, newCard];

    setCardList(newCardList);

    // # Reset Form
    setFormData(formInitialData);
    e.target.publishInput.checked = false;
    e.target.category.value = "";
  }

  return (
    <main>
      <section className="form-section border-1 border-bottom">
        <div className="container py-4">
          <h2 className="text-light text-center pb-4">Post Creation</h2>
          <form
            onSubmit={handleSubmit}
            className="d-flex gap-3 flex-wrap justify-content-between align-items-center"
          >
            <div className="form-floating col">
              <input
                type="text"
                className="form-control"
                id="titleInput"
                value={formData.title}
                name="title"
                onChange={handleFormChange}
                placeholder="Title"
              />
              <label htmlFor="titleInput">Title</label>
            </div>
            <div className="form-floating col">
              <input
                type="text"
                className="form-control"
                id="authorInput"
                value={formData.author}
                name="author"
                onChange={handleFormChange}
                placeholder="Author"
              />
              <label htmlFor="authorInput">Author</label>
            </div>
            <div className="col">
              <select
                name="category"
                className="form-select"
                onChange={handleFormChange}
              >
                <option value="">Select Category</option>
                <option value="Programming">Programming</option>
                <option value="Web Design">Web Design</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Accessibility">Accessibility</option>
                <option value="React Development">React Development</option>
              </select>
            </div>
            <div className="form-floating col-12">
              <textarea
                type="text"
                className="form-control"
                id="contentInput"
                value={formData.content}
                name="content"
                onChange={handleFormChange}
                placeholder="Content"
              />
              <label htmlFor="contentInput">Content</label>
            </div>

            <div className="col-12 mb-3">
              <BadgeList badgeList={badgeList} retrieveTags={retrieveTags} />
            </div>

            <div>
              <input
                type="checkbox"
                className="btn-check"
                id="publishInput"
                value={formData.isPublic}
                name="isPublic"
                onChange={handleFormChange}
                autoComplete="off"
              />
              <label
                className="btn btn-outline-light fs-5"
                htmlFor="publishInput"
              >
                Public
              </label>
            </div>
            <div>
              <button className="btn btn-light fs-5">Create</button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <h2 className="text-light text-center pb-4">Post List</h2>
          <CardList cardList={cardList} />
        </div>
      </section>
    </main>
  );
}
