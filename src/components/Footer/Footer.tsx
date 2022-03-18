import React from "react";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="bg-gray-700">
      <p className="text-center p-3 text-white">
        Copyright &copy; Ritesh Sahu 2019
      </p>
    </footer>
  );
}
