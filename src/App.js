import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section className="main">
          <MessagesList />
          <AddMessage />
          <ToastContainer autoClose={6000}/>
        </section>
      </div>
    );
  }
}

export default App;
