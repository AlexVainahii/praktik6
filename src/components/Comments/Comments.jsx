import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
import { useGetCommentsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const filter = useSelector(selectFilter);
  console.log("filter :>> ", filter);

  const { data: comments } = useGetCommentsQuery();
  console.log("coments :>> ", comments);

  const filterComments = () => {
    if (filter === "") {
      return comments;
    }
    return comments.filter((comment) =>
      comment.content.toLowerCase().includes(filter.toLowerCase())
    );
  };
  if (!comments) {
    return;
  }
  return (
    <Grid>
      {comments &&
        filterComments().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
