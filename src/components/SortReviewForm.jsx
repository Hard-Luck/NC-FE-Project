import React from "react";

const SortReviewForm = ({ changeSort, changeOrder }) => {
  return (
    <div className="form-container">
      <label htmlFor="sort">Order by</label>
      <select id="sort" name="sortby" onChange={changeSort}>
        <option value="">----Select----</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Number of comments</option>
        <option value="votes">Votes</option>
      </select>
      <button onClick={changeOrder}>Ascending / Decending</button>
    </div>
  );
};

export default SortReviewForm;
