import React from "react";

const SortReviewForm = ({ changeSort }) => {
  return (
    <div className="form-container">
      <label htmlFor="sort">Order by</label>
      <select id="sort" name="sortby" onClick={changeSort}>
        <option value="">----Select----</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Number of comments</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};

export default SortReviewForm;
