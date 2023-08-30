import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id))

  return (
    <div
      onClick={() => {
        if (window.confirm("Etes-vous sûr(e) de vouloir supprimer ?")) {
          deleteQuote();
        }
      }}
    >
      <img src="./img/icons/trash.svg" alt="Corbeille" />
    </div>
  );
};

export default DeleteCard;
