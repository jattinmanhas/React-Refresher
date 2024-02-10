import React from 'react'
import classes from "./Post.module.css";

const names = ["Jattin", "Manhas"]

const Post = (props) => {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div /*style={{color: 'white'}}*/ className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </div>
  )
}

export default Post