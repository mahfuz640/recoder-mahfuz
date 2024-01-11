"use client";
import Image from "next/image";
import logoWhite from "@/imgs/logo-white.png";
import coding3 from "@/imgs/coding3.svg";
import freeSvg from "@/imgs/Free.svg";
import number1 from "@/imgs/01.png";
import number2 from "@/imgs/02.png";
import number3 from "@/imgs/03.png";
import iconMonster from "@/imgs/iconmonstr-quote-3-240.png";
import arrangingSvg from "@/imgs/Arranging.svg";
import languageSVG from "@/imgs/Language.svg";
import ReactTyped from "react-typed";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import Nav from "@/components/Nav/Nav";
import Link from "next/link";
export default function Home() {
  const arr = [
    "print('Hello, Programmer')",
    'System.out.println("Welcome to programmeing world")',
    'console.log("How are you Programmer")',
    "SELECT 'Hello, World' FROM DUAL",
    'printf("Hello, World")',
  ];
  const options = {
    strings: arr,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    startDelay: 900,
    shuffle: true,
    cursorChar: "|",
  };

  return (
    <>
      <Nav />

      <section className="home" id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="text-center">
                <Image
                  src={coding3}
                  alt="Coding "
                  className="img-custom img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="intro">
                <h1 className="mb-5">
                  <span className="intro--title">
                    Your Online Free Code Editor
                  </span>
                  <span className="intro--quote">
                    <Image
                      className="l-q"
                      width={15}
                      src={iconMonster}
                      alt=""
                    />
                    &nbsp;Code Editor Programmer's Second Home
                    <Image
                      className="r-q"
                      width={15}
                      src={iconMonster}
                      alt=""
                    />
                  </span>
                  <div style={{ position: "relative" }}>
                    <span className="arrow">&gt;</span>
                    {/* strings: arr,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    startDelay: 900,
    shuffle: true,
    cursorChar: "|", */}
                    <ReactTyped
                      strings={arr}
                      typeSpeed={100}
                      backSpeed={70}
                      backDelay={1000}
                      startDelay={true}
                      shuffle={true}
                      cursorChar={"|"}
                      loop
                      className="intro--desc"
                    ></ReactTyped>
                  </div>
                </h1>
                <Link href={"/code"} id="container">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow1" />
                    </span>
                    <span className="button-text">Start Coding</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2e4e4"
            fillOpacity={1}
            d="M0,224L60,224C120,224,240,224,360,197.3C480,171,600,117,720,128C840,139,960,213,1080,213.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
       
      </section>
      {/* FEATURES START*/}
      <section className="features" id="features">
        <h1 className="page-heading text-center">Features</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="features--img text-center">
                <Image
                  width="50%"
                  src={freeSvg}
                  alt="Arranging Files"
                  className="img-custom img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features--text">
                <div>
                  <div className="img-div">
                    <Image
                      width="45%"
                      style={{ opacity: "0.5" }}
                      src={number1}
                      alt="number one"
                      className="img-custom img-fluid"
                    />
                  </div>
                  <h1 style={{ color: "4b2870" }}>FREE TO USE</h1>
                  <p style={{ marginBottom: 0 }} className="lead lh-md">
                    This website is completly free to use!
                  </p>
                  <p style={{ marginBottom: "7rem" }} className="lead lh-md">
                    You can compile your codes without having to pay anything!
                    All you have to do is sign up then you are ready to go!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 order-last order-lg-first">
              <div className="features--text">
                <div>
                  <div className="img-div">
                    <Image
                      width="45%"
                      style={{ opacity: "0.5" }}
                      src={number2}
                      alt="number two"
                      className="img-custom img-fluid"
                    />
                  </div>
                  <h1>ORGANIZED</h1>
                  <p style={{ marginBottom: 0 }} className="lead lh-md">
                    You don't have to worry about organizing your work!
                  </p>
                  <p style={{ marginBottom: "7rem" }} className="lead lh-md">
                    We keep all of your work organized, we make it easy for you
                    to write/edit your codes!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="features--img text-center">
                <Image
                  width="50%"
                  src={arrangingSvg}
                  alt="Arranging Files"
                  className="img-custom img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="features--img text-center">
                <Image
                  width="50%"
                  src={languageSVG}
                  alt="Arranging Files"
                  className="img-custom img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features--text">
                <div>
                  <div className="img-div">
                    <Image
                      width="45%"
                      style={{ opacity: "0.5" }}
                      src={number3}
                      alt="number one"
                      className="ml-0 img-custom img-fluid"
                    />
                  </div>
                  <h1>LANGUAGES</h1>
                  <p style={{ marginBottom: 0 }} className="lead lh-md">
                    We support many languages!
                  </p>
                  <p className="features--last lead lh-md">
                    Java, C++, Python, And much more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <h1 className="page-heading text-center">FAQ</h1>
          <div className="accordion" id="accordionExample">
            <div style={{ marginBottom: "2rem" }} className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  style={{ fontWeight: 500 }}
                >
                  What is this site and how do i use it?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This site provides you the ability to
                  <strong>Edit and Develop</strong> a simple project, you call
                  it a mini project. All you have to do so is register your
                  account and create a new workshop to start writing and editing
                  your own codes!
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }} className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontWeight: 500 }}
                >
                  Is this website free?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This answer is <strong>Yes</strong>, this website is completly
                  free to use to all users, you don't have to pay anything to
                  have free access to all of our features.
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }} className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ fontWeight: 500 }}
                >
                  What languages do you support?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our editor supports a variety of languages, it supports
                  <strong>most</strong> of the common programming languages,
                  such as Java, C++, Javascript, Python, Php etc..
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }} className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{ fontWeight: 500 }}
                >
                  Can i save and edit my projects?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Yes</strong>. All of your projects are saved and
                  stored in our database, you can return to them and edit them
                  at any time you want.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer" id="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2e4e4"
            fillOpacity={1}
            d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,261.3C672,245,768,203,864,176C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2">
              {/* <Image
            width="40%"
            src="./imgs/js-svgrepo-com.svg"
            alt="number one"
            class="footer-img img-fluid"
          /> */}
            </div>
            <div className="col-2">
              {/* <Image
            width="40%"
            src="./imgs/java-svgrepo-com.svg"
            alt="number one"
            class="footer-img img-fluid"
          /> */}
            </div>
            <div className="col-2">
              {/* <Image
            width="40%"
            src="./imgs/c-logo-svgrepo-com.svg"
            alt="number one"
            class="footer-img img-fluid"
          /> */}
            </div>
            <div className="col-2">
              {/* <Image
            width="40%"
            src="./imgs/py-svgrepo-com.svg"
            alt="number one"
            class="footer-img img-fluid"
          /> */}
            </div>
          </div>
          <div className="container cus-pad-max" />
          <div className="row">
            <div className="col-3">
              <div className="company">
                <Image
                  width="40%"
                  src={logoWhite}
                  alt="number one"
                  className="img-fluid"
                />
                <p className="footer-text">
                  Copyright © 2023 by CSE STUDENT, All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="mx-2">
                <h3 className="footer--title">Contact Us</h3>
                <p className="footer-text lh-md">
                  Manarat International University, Department of CSE
                  Engineering, myEmail@gmail.com
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="mx-2">
                <h3 className="footer--title">Account</h3>
                <ul className="footer-text">
                  <li>
                    <a href="#home">Login</a>
                  </li>
                  <li>
                    <a href="#sign-up">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="about-us mx-2">
                <h3 className="footer--title">SITE</h3>
                <ul className="footer-text">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#sign-up">Sign Up</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
