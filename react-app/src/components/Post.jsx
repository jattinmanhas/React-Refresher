import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

const names = ["Jattin", "Manhas"];

const Post = (props) => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div /*style={{color: 'white'}}*/ className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </div>
  );
};

export default Post;
