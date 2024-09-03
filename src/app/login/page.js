"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState({
    message: "",
    status: "",
  });

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleSubmitLogin() {}

  useEffect(() => {
    if (loginData.username == "admin" && loginData.password == "admin") {
      setLoginStatus({ message: "Kamu admin", status: "success" });
      return;
    }
    setLoginStatus({ message: "Kamu Bukan admin", status: "error" });
  }, [loginData]);

  return (
    <main className="flex w-full h-screen space-x-4 space-y-4 items-center justify-center bg-rose-300 ">
      <div className="flex w-full max-w-[400px] flex-col gap-5">
        <input
          name="username"
          placeholder="Username"
          onChange={handleChangeInput}
        />

        <input
          name="password"
          placeholder="Password"
          onChange={handleChangeInput}
        />

        <button className="btn-primary bg-indigo-600" onClick={handleSubmitLogin}>
          Login
        </button>
      </div>
      {loginStatus.status == "success" && (
        <div className="text-emerald-500">{loginStatus.message}</div>
      )}
      {loginStatus.status == "error" && (
        <div className="text-red-500">{loginStatus.message}</div>
      )}
    </main>
  );
}
