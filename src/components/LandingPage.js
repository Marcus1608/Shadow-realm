import React, { useState, useEffect } from 'react';
import './LandingPage.scss';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';

export const LandingPage = () => {
  // custom cursor
  useEffect(() => {
    const ball = document.querySelector('.cursor-ball');
    const hoverables = document.querySelectorAll('.hoverable');

    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', mouseHover);
      hoverables[i].addEventListener('mouseleave', mouseHoverOut);
    }

    function onMouseMove(e) {
      gsap.to(ball, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
    }

    function mouseHover() {
      gsap.to(ball, {
        scale: 2.5,
        background: '#fff',
        borderRadius: '100%',
        height: '30px',
        width: '30px',
        duration: 0.2,
      });
    }

    function mouseHoverOut() {
      gsap.to(ball, {
        scale: 1,
        duration: 0.2,
        background: 'transparent',
      });
    }
  });

  //   back to top
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 890) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="cursor">
        <div className="cursor-ball">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div>
      </div>

      <button
        className={isVisible ? 'backToTop-btn' : 'backToTop-btn--hidden'}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up" />
      </button>

      <div className="landing-wrapper">
        {/* section one */}
        <div className="section-one--container">
          <div className="navbar">
            <h1 className="hoverable">Shadow</h1>
            <h1 className="hoverable">Realm</h1>

            <ul>
              <li>Home</li>

              <Link to="service" spy={true} smooth={true}>
                <li>Services</li>
              </Link>
              <Link to="about" spy={true} smooth={true}>
                <li>About</li>
              </Link>
              <Link to="contact" spy={true} smooth={true}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="section-one--container__content sectionOne-content">
            <section className="sectionOne-content--introduction">
              <h1>Welcome To The Shadow Realm</h1>

              <p>
                This is shadow realm. A team of developers built to bring your
                ideas to life. Passoinate and inspired by everything digital,
                we're dedicated to our work and our employers
              </p>

              {/* button */}
              <button className="projects-btn hoverable">
                <span>See</span> Projects
              </button>
            </section>

            <section className="sectionOne-content--image">
              <img src="imgs/shadow1.png" alt="" />
            </section>

            <section className="sectionOne-content--Title-webStudio">
              <p>Web Studio</p>
            </section>
          </div>
        </div>

        {/* section two */}
        <div className="section-two--container service">
          <div className="section-two--container__content sectionTwo-content">
            <div className="sectionTwo-content--services">
              <ul>
                <li>
                  <h1>Web Design</h1>
                  <p>
                    Attract an audience with eye catching designs and Ui's.
                    Trust us, we know a pretty website when we see one.
                  </p>
                </li>
                <li>
                  <h1>Website Development</h1>
                  <p>
                    Web design is beauty, web development is functionality, And
                    we'ree good at both.
                  </p>
                </li>
                <li>
                  <h1>Roblox Development</h1>
                  <p>
                    random random random random random random random random
                    random random
                  </p>
                </li>
                <li>
                  <h1>Art & Music</h1>
                  <p>
                    We specialize in logos, banners, vector arts, jingles & more{' '}
                  </p>
                </li>
              </ul>

              <button className="contact-btn hoverable">
                <span>Contact</span> Us
              </button>
            </div>

            <div className="sectionTwo-content--image">
              <img src="imgs/shadow2.png" alt="" />
            </div>

            <div className="sectionTwo-content--titleServices">
              <p>Our Services</p>
            </div>
          </div>
        </div>

        {/* section three */}
        <div className="section-three--container about">
          <div className="section-three--container__content sectionThree-content">
            <div className="sectionThree-content--about">
              <h1>What We Are</h1>
              <p>
                Shadow Realm is a team full of enthusiastic, creative and open
                minded farmers. Our field is the internet, and we only harvest
                customer satisfaction
              </p>

              <h2>Our Team</h2>
              <ul>
                <li>
                  <strong>Mark</strong> <span>Frontend Developer</span>
                </li>
                <li>
                  <strong>Shaquille</strong> <span>Backend Developer</span>
                </li>
                <li>
                  <strong>Rico</strong> <span>Roblox Developer</span>
                </li>
                <li>
                  <strong>Christopher</strong> <span>Artist</span>
                </li>
                <li>
                  <strong>Alan</strong> <span>Musician</span>
                </li>
              </ul>
            </div>

            <div className="sectionThree-content--image">
              <img src="imgs/shadow3.png" alt="" />
            </div>

            <div className="sectionThree-content--titleAbout">
              <p>About Us</p>
            </div>
          </div>
        </div>

        {/* section four */}
        <div className="section-four--container contact">
          <div className="section-four--container__content sectionFour-content">
            <div className="sectionFour-content--projects">
              <ul>
                <li className="hoverable"></li>
                <li className="hoverable"></li>
                <li className="hoverable"></li>
              </ul>

              <button className="viewMore-btn hoverable">
                <span>View</span> More
              </button>
            </div>

            <div className="sectionFour-content--image">
              <img src="imgs/shadow4.png" alt="" />
            </div>

            <div className="sectionFour-content--titleProjects">
              <p>Our Projects</p>
            </div>
          </div>
        </div>

        {/* section five / footer */}
        <div className="section-five--container">
          <div className="section-five--contianer__content sectionFive-content">
            <div className="sectionFive-content--legal">
              <h2>Legal</h2>
              <p className="legal-p--1">shadow realm media is brand owned</p>
              <a href="mailto: shadowrealm@gmail.com"> shadowrealm@gmail.com</a>

              <p className="legal-p--2">Copyright @ Mark Corbin</p>
            </div>
            <div className="sectionFive-content--office">
              <h2>Office</h2>
              <ul>
                <li>Shadow Realm Inc</li>
                <li>Road 46</li>
                <li>St Parish</li>
                <li>Barbados</li>
              </ul>
            </div>
            <div className="sectionFive-content--socials">
              <h2>Socials</h2>
              <ul>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
