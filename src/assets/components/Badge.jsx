import { useState } from "react";

export default function Badge({ badge, retrieveTags }) {
  const [tags, setTags] = useState([]);
  function handleChange(e) {
    const value = e.target.id;
    if (!tags.includes(e.target.id)) setTags([...tags, value]);
    // TODO: RESET CHECKED + BETTER RETRIEVE DATA
    return retrieveTags(tags || []);
  }

  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={badge}
        onChange={handleChange}
      />
      <label className="btn btn-outline-light m-1 fs-5" htmlFor={badge}>
        {badge}
      </label>
    </>
  );
}
