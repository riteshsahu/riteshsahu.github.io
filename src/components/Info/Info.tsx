import React from "react";

export interface IInfoProps {}

export default function Info(props: IInfoProps) {
  return (
    <aside className="card mb-8">
      <ul>
        <li className="mb-5">
          <span className="icon icon-location-pin text-xl pr-2 text-green-800"></span>
          <a
            className="link venobox"
            title="Map"
            data-vbtype="iframe"
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45447270284!2d75.72376176463997!3d22.72391172974405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C+Madhya+Pradesh%2C+India!5e0!3m2!1sen!2sus!4v1566148491374!5m2!1sen!2sus"
          >
            Indore, Madhya Pradesh, India
          </a>
        </li>

        <li className="mb-5 whitespace-no-wrap">
          <span className="icon icon-email text-xl pr-2 text-orange-600"></span>
          <a
            className="link"
            href="mailto:riteshsahu314@gmail.com"
            title="Send mail to Ritesh Sahu"
          >
            riteshsahu314@gmail.com
          </a>
        </li>

        <li>
          <span className="icon icon-customer text-xl pr-2 text-indigo-700"></span>
          <a
            className="js--contact-me link"
            data-vbtype="iframe"
            href="https://docs.google.com/forms/d/e/1FAIpQLSci9KzAtAgqV13277F-PhJ4Iak93Y78AZNSyLHoBYD4LZX3Pw/viewform?embedded=true"
            title="Contact Form"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </aside>
  );
}
