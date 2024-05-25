import React, { useEffect } from "react";

export default function Header() {

  return (
    <header className="p-10 bg-white">
      <div className="flex-col flex-wrap items-center sm:flex sm:flex-row lg:mx-10 -mt-5">
        {/* <img
          src="dist/images/RiteshSahu.jpg"
          alt="Ritesh Sahu"
          className="img-me cursor-pointer mx-auto md:mx-0 mt-5"
          style="border: 1px solid #d4d4d4;"
        />  */}
        <div className="mx-auto sm:mx-12 my-5 text-center sm:text-left">
          <h1 className="text-4xl font-bold whitespace-no-wrap">Ritesh Sahu</h1>
          <h2 className="text-2xl text-gray-600 mb-3 whitespace-no-wrap">
            Developer
          </h2>
          <ul className="flex items-center justify-center sm:justify-start -ml-3">
            <li className="px-3">
              <a
                href="https://github.com/riteshsahu"
                rel="noreferrer"
                target="_blank"
                title="Github account"
              >
                <span className="icon icon-github-logo text-3xl"></span>
              </a>
            </li>

            <li className="px-3">
              <a
                href="https://stackoverflow.com/users/9611553/ritesh-sahu"
                rel="noreferrer"
                target="_blank"
                title="Stackoverflow profile"
              >
                <span className="icon icon-stackoverflow-logo text-3xl">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </span>
              </a>
            </li>

            <li className="px-3">
              <a
                href="https://www.linkedin.com/in/riteshsahu314/"
                rel="noreferrer"
                target="_blank"
                title="Linkedin profile"
              >
                <span className="icon icon-linkedin-logo text-3xl">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </span>
              </a>
            </li>

          </ul>
        </div>

        <div className="flex flex-grow justify-center sm:justify-end">
          <a
            href="mailto:riteshsahu314@gmail.com"
            rel="noreferrer"
            title="Send mail to Ritesh Sahu"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center sm:w-auto whitespace-no-wrap inline-block"
          >
            <span className="icon icon-paper-plane">&nbsp;</span>
            <span className="uppercase">mail</span>
          </a>
        </div>
      </div>
    </header>
  );
}
