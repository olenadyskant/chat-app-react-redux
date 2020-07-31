import React from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import './AddMessage.css'
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const AddMessage = (props) => {
  let input;
  const notify = () => toast(`You've got a new message!`);
  return (
    <section className="new-message">
      <input placeholder="type your message"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.dispatch(input.value, "Me");
            notify();
            input.value = "";
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default AddMessage;
