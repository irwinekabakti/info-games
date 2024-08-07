import React, { FC } from "react";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
import { FooterWrapper } from "./style";

const Footer: FC = () => {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <FooterWrapper>
      <div className="footer-top">
        <div className="footer-content text-white d-grid container">
          <div className="footer-item">
            <Link
              href="/"
              className="navbar-brand text-white text-uppercase no-wrap d-block">
              info <span>games</span>
            </Link>
            <p className="para-text">
              Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
              augue euismod. Nulla ullam dolor sitamet consectetur
            </p>
          </div>

          <div className="footer-item">
            <h5 className="footer-item-title text-uppercase">service</h5>
            <ul className="footer-item-links">
              <li>
                <Link href="/" className="text-white">
                  Gaming
                </Link>
              </li>
              <li>
                <a href="/" className="text-white">
                  Product
                </a>
              </li>
              <li>
                <Link href="/" className="text-white">
                  Social Network
                </Link>
              </li>
              <li>
                <a href="/" className="text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h5 className="footer-item-title text-uppercase">supports</h5>
            <ul className="footer-item-links">
              <li>
                <Link href="/" className="text-white">
                  Setting & Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white">
                  Live Actions
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white">
                  Our News
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h5 className="footer-item-title text-uppercase">newsletter</h5>
            <p className="para-text">
              Subscribe our newsletter to get our latest update &
              newsconsectetur
            </p>

            <form className="newsletter-form">
              <div className="input-group d-flex align-items-stretch">
                <input
                  type="text"
                  className="input-group-field"
                  placeholder="Your email address"
                />
                <button
                  className="input-group-btn bg-white d-inline-flex align-items-center justify-content-center"
                  aria-label="btn">
                  <AiOutlineSend size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-column text-center">
          <p className="footer-bottom-text text-green">
            Copyright © {year} irwinekabakti - All rights reserved.
          </p>
          <ul className="footer-bottom-links d-flex justify-content-center">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Terms & Coditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
