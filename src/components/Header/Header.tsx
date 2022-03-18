import React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
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
            Full Stack Developer
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

            <li className="px-3">
              <a
                href="https://www.upwork.com/freelancers/~01b30a2b1071a25c00"
                rel="noreferrer"
                target="_blank"
                title="Upwork profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 150 150"
                  stroke="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#fff"
                  fill-rule="evenodd"
                >
                  <circle cx="74.75" cy="74.75" fill="#6fda44" r="74.75" />
                  <path
                    d="M105.6012 54.2558c-11.9355.0574-21.0072 7.9512-24.4035 20.5305-5.6981-8.7689-10.1434-18.7993-12.6924-27.2673l-12.5619.0592.174 33.2977c.0313 6.5927-5.288 11.9627-11.8807 11.9938s-11.9625-5.288-11.9938-11.8807l-.174-33.2978-12.5689.0609.174 33.3013c.0487 13.8163 11.09 24.7654 24.6018 24.6958s24.454-11.1109 24.3931-24.9325l-.0261-5.6546c2.5315 5.0109 5.6981 10.3523 9.1778 15.05L70.1391 127l12.8751-.0591 5.5328-26.728c5.0387 3.1196 10.7002 4.976 17.2943 4.9447 13.8234-.0783 25.0804-11.4362 25.0108-25.9067-.0627-13.8251-11.4275-25.0769-25.2491-25.0142zm.1966 38.0093c-5.0247.0226-10.0599-2.1505-14.1591-5.5902l1.2319-5.0456v-.3167c.9186-5.3484 3.6989-14.4688 13.1221-14.5106 6.9319-.0127 12.5727 5.5748 12.6263 12.5063-.2836 7.2257-6.2235 12.9099-12.8229 12.9394z"
                    fill="#fff"
                    fill-rule="nonzero"
                  />
                </svg>
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
