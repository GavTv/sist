import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer__art-layer, .footer__logo-icon, .footer__cta::before {
  animation: none;
}
.footer__main::after {
  animation: none;
  width: 40%;
}
.footer__social-link:hover, .footer__scroll-top:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer" className="footer">
        <div className="footer__background-art">
          <div className="footer__art-layer--1 footer__art-layer"></div>
          <div className="footer__art-layer--2 footer__art-layer"></div>
          <div className="footer__art-layer--3 footer__art-layer"></div>
        </div>
        <div className="footer__container">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="footer__logo">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="footer__logo-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle r="3" cx="6" cy="18"></circle>
                    <circle r="3" cx="18" cy="16"></circle>
                  </g>
                </svg>
                <span className="footer__logo-text">Наши сети</span>
              </div>
              <p className="footer__tagline">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer__social">
                <a
                  href="https://instagram.com/sa_musstudio?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Instagram"
                    className="footer-thq-footersocial-link-elm1 footer__social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://vk.com/studiozv"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Facebook"
                    className="footer-thq-footersocial-link-elm2 footer__social-link"
                  >
                    <div className="social-link-wrapper">
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit our VK profile"
                        className="social-icon-link"
                      >
                        <div className="vk-icon social-icon-container">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            className="social-icon-svg"
                          >
                            <path
                              d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4h0V6h4v4.5h.03A4.53 4.53 0 0 0 18 6.004h4l-.342 1.711A6.86 6.86 0 0 1 18 12.504h0a5.34 5.34 0 0 1 3.566 4.111L22 19.004h0h-4a4.53 4.53 0 0 0-3.97-4.496v4.5z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="YouTube" className="footer__social-link">
                    <div className="whatsapp-icon-wrapper">
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Contact us on WhatsApp"
                        className="whatsapp-link"
                      >
                        <div className="whatsapp-icon-container">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            className="whatsapp-icon"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="footer-container4">
                      <div className="footer-container5">
                        <Script
                          html={`<style>
@media (prefers-reduced-motion: reduce) {
.whatsapp-link, .whatsapp-icon-container, .whatsapp-icon {
  transition: none;
}
.whatsapp-link:hover .whatsapp-icon-container {
  transform: none;
}
.whatsapp-link:hover .whatsapp-icon {
  transform: none;
}
}
</style>`}
                        ></Script>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://t.me/ZV_musicstudio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Telegram"
                    className="footer-thq-footersocial-link-elm4 footer__social-link"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <nav className="footer__nav">
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">Исследуйте </h3>
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="#homepage">
                      <div className="footer__nav-link">
                        <span>Главная страница</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#about-us">
                      <div className="footer__nav-link">
                        <span>
                          <span>О нас</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#teachers">
                      <div className="footer__nav-link">
                        <span>Преподаватели</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#disciplines-classes">
                      <div className="footer__nav-link">
                        <span>
                          {' '}
                          Дисциплины и занятия
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">Сервис</h3>
                <ul className="footer__nav-list">
                  <Link to="/disciplines-classes">
                    <li className="footer-thq-footernav-item-elm5 footer__nav-item">
                      <div className="footer__nav-link">
                        <span>Цены</span>
                      </div>
                    </li>
                  </Link>
                  <li className="footer__nav-item"></li>
                  <li className="footer__nav-item">
                    <a href="#events">
                      <div className="footer__nav-link">
                        <span>Концерты </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav-column">
                <h3 className="footer__nav-title">Контакты</h3>
                <ul className="footer__contact-list">
                  <li className="footer__contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="footer__contact-icon"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <a href="tel:+1234567890">
                      <div className="footer__contact-link">
                        <span>
                          {' '}
                          +7(916) 235-33-81
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer__contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="footer__contact-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <a href="mailto:hello@creativeharmony.com?subject=">
                      <div className="footer__contact-link">
                        <span>
                          {' '}
                          soundaround.club@yandex.ru
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer__contact-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="footer__contact-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                        <circle r="3" cx="10" cy="10"></circle>
                      </g>
                    </svg>
                    <span className="footer__contact-text">
                      {' '}
                      улица Мнёвники дом 7 корпус 1
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="footer__bottom">
            <div className="footer__legal">
              <p className="footer__copyright">
                {' '}
                Звук Вокруг. Все права защищены. 2025 год
              </p>
            </div>
            <button
              id="scrollToTop"
              aria-label="Scroll to top"
              className="footer__scroll-top"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="m5 12l7-7l7 7m-7 7V5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<style>
        @keyframes footerFloat {0%,100% {transform: translate(0, 0) scale(1);}
33% {transform: translate(30px, -30px) scale(1.1);}
66% {transform: translate(-20px, 20px) scale(0.9);}}@keyframes footerLineExpand {from {width: 0;}
to {width: 40%;}}@keyframes footerLogoFloat {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-5px) rotate(5deg);}}@keyframes footerCtaPulse {0%,100% {transform: scale(1) translate(0, 0);
opacity: 0.5;}
50% {transform: scale(1.3) translate(-20px, 20px);
opacity: 0.8;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container8">
        <div className="footer-container9">
          <Script
            html={`<script defer data-name="footer">
(function(){
  const scrollToTopButton = document.getElementById("scrollToTop")

  if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    let lastScrollPosition = 0
    let ticking = false

    function updateScrollTopButton() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (scrollPosition > 500) {
        scrollToTopButton.style.opacity = "1"
        scrollToTopButton.style.pointerEvents = "auto"
      } else {
        scrollToTopButton.style.opacity = "0"
        scrollToTopButton.style.pointerEvents = "none"
      }

      ticking = false
    }

    window.addEventListener("scroll", function () {
      lastScrollPosition = window.pageYOffset

      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateScrollTopButton()
        })

        ticking = true
      }
    })

    scrollToTopButton.style.opacity = "0"
    scrollToTopButton.style.pointerEvents = "none"
    scrollToTopButton.style.transition = "opacity 0.3s ease"
  }

  const footerLinks = document.querySelectorAll(
    ".footer__nav-link, .footer__legal-link, .footer__contact-link"
  )

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href && href.startsWith("#") && href.length > 1) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  const socialLinks = document.querySelectorAll(".footer__social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transition = "all 0.3s ease"
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
