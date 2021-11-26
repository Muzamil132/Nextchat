import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";

export default function Home() {
  const [formdata, setFormdata] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form class="w-full max-w-lg px-4 lg:px-0  ">
        <h1 className="lg:text-6xl text-textdark mb-10 font-bold   text-3xl text-center ">
          SIGN UP
        </h1>

        <Input placeholder="Username" name="username" />
        <Input placeholder="Email" name="email" />
        <Input placeholder="Password" name="password" />
        <Input placeholder="Confirm password" name="confirmpassword" />

        <div class="md:flex md:items-center">
          <button
            class="gradient  transition duration-500 transform hover:translate-y-1 hover:scale-103   shadow w-full hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-4 rounded"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
