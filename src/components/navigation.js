import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container10">
      <div className="navigation-container11">
        <div className="navigation-container12">
          <Script
            html={`<style>
[data-theme="dark"] .navigation-theme-icon-light {
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -50%) rotate(90deg) scale(0);
}
[data-theme="dark"] .navigation-theme-icon-dark {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) rotate(0deg) scale(1);
}
@media (prefers-reduced-motion: reduce) {
.navigation-creative, .navigation-logo, .navigation-link-underline, .navigation-social-link, .navigation-theme-toggle, .navigation-mobile-toggle, .navigation-mobile-menu, .navigation-mobile-link, .navigation-backdrop {
  animation: none;
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav id="navigation-main" className="navigation-creative">
        <div className="navigation-container">
          <a href="https://mikealina.ru">
            <address aria-label="Звук Вокруг" className="navigation-logo">
              <div
                id="bb7fc243-f1b1-4124-95c6-e9ae9ae0a2fe"
                className="navigation-logo-icon"
              >
                <div className="nav-logo-container">
                  <img
                    alt="Logo"
                    src="/log-200h.jpg"
                    className="nav-logo-image"
                  />
                </div>
              </div>
              <div className="navigation-logo-text">
                <abbr className="navigation-logo-main">Звук Вокруг</abbr>
              </div>
            </address>
          </a>
          <div className="navigation-links">
            <Link to="/about-us">
              <div className="navigation-thq-navigation-link-elm1 navigation-link">
                <span className="navigation-link-text">О нас</span>
                <span className="navigation-link-underline"></span>
              </div>
            </Link>
            <Link to="/disciplines-classes">
              <div className="navigation-thq-navigation-link-elm2 navigation-link">
                <span className="navigation-link-text">
                              Дисциплины 
                </span>
                <span className="navigation-link-underline"></span>
              </div>
            </Link>
            <Link to="/contacts-and-registration">
              <div className="navigation-thq-navigation-link-elm3 navigation-link">
                <span className="navigation-link-text">
                  Контакты &amp; Регистрация
                </span>
                <span className="navigation-link-underline"></span>
              </div>
            </Link>
          </div>
          <div className="navigation-actions">
            <div className="navigation-social">
              <a
                href="https://instagram.com/sa_musstudio?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noreferrer noopener"
              >
                <div target="_blank" rel="noreferrer noopener">
                  <div
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Instagram"
                    className="navigation-navigation-social-link"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                </div>
              </a>
              <a
                href="https://t.me/soundaround_club"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div target="_blank" rel="noreferrer noopener">
                  <div
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Telegram"
                    className="navigation-navigation-social-link"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                </div>
              </a>
              <a href="#whatsapp">
                <div>
                  <div
                    aria-label="YouTube"
                    className="navigation-footer__social-link"
                  >
                    <div className="whatsapp-icon-wrapper">
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Contact us on WhatsApp"
                        className="navigation-whatsapp-link"
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
                    <div className="container1">
                      <div className="container2">
                        <div className="navigation-container16">
                          <div className="navigation-container17">
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
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://vk.com/studiozv"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div target="_blank" rel="noreferrer noopener">
                  <div
                    aria-label="Facebook"
                    className="thq-footersocial-link-elm2 navigation-footer__social-link"
                  >
                    <div className="social-link-wrapper">
                      <div
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Visit our VK profile"
                        className="navigation-social-icon-link"
                      >
                        <div className="navigation-social-icon-container vk-icon">
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
                </div>
              </a>
            </div>
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
              className="navigation-navigation-mobile-toggle navigation-thq-navigation-mobile-toggle-elm"
            >
              <span className="navigation-thq-thq-navigation-mobile-icon-elm1-elm">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 5h16M4 12h16M4 19h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="navigation-thq-thq-navigation-mobile-icon-elm2-elm">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
            <nav id="mobileNav" className="mobile-navigation">
              <div
                id="menuOverlay"
                className="navigation-mobile-menu-overlay2"
              ></div>
              <div id="menuPanel" className="mobile-menu-panel">
                <nav role="navigation" className="mobile-menu-nav">
                  <a href="https://www.mikealina.ru/" data-page="index">
                    <div className="navigation-container19">
                      <div className="navigation-mobile-nav-link1">
                        <span>Главная</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.mikealina.ru/about-us"
                    target="_blank"
                    rel="noreferrer noopener"
                    data-page="about"
                  >
                    <div>
                      <div className="navigation-mobile-nav-link1">
                        <span>О нас</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.mikealina.ru/contacts-and-registration"
                    target="_blank"
                    rel="noreferrer noopener"
                    data-page="contacts"
                  >
                    <div>
                      <div className="navigation-mobile-nav-link1">
                        <span>Контакты</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.mikealina.ru/disciplines-classes"
                    target="_blank"
                    rel="noreferrer noopener"
                    data-page="disciplines"
                  >
                    <div>
                      <div className="navigation-mobile-nav-link1">
                        <span>Дисциплины и классы</span>
                      </div>
                    </div>
                  </a>
                  <div className="mobile-menu-divider"></div>
                  <div className="mobile-social-section">
                    <a
                      href="https://instagram.com/sa_musstudio?igshid=OGQ5ZDc2ODk2ZA=="
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div target="_blank" rel="noreferrer noopener">
                        <div className="navigation-mobile-nav-link1 navigation-mobile-social-link2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                            </g>
                          </svg>
                          <span>Instagram</span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://t.me/soundaround_club"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div target="_blank" rel="noreferrer noopener">
                        <div className="navigation-mobile-nav-link1 navigation-mobile-social-link2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"
                            ></path>
                          </svg>
                          <span>Telegram</span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://vk.com/studiozv"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div target="_blank" rel="noreferrer noopener">
                        <div className="navigation-mobile-nav-link1 navigation-mobile-social-link2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
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
                          <span>VK</span>
                        </div>
                      </div>
                    </a>
                    <a href="#youtube">
                      <div target="_blank" rel="noreferrer noopener">
                        <div className="navigation-mobile-nav-link1 navigation-mobile-social-link2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                              <path d="m10 15l5-3l-5-3z"></path>
                            </g>
                          </svg>
                          <span>YouTube</span>
                        </div>
                      </div>
                    </a>
                    <a href="#whatsapp">
                      <div target="_blank" rel="noreferrer noopener">
                        <div className="navigation-mobile-nav-link1 navigation-mobile-social-link2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                            </g>
                          </svg>
                          <span>WhatsApp</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
            </nav>
            <div className="container3">
              <div className="container4">
                <div className="navigation-container28">
                  <div className="navigation-container29">
                    <Script
                      html={`<style>
@media (prefers-reduced-motion: reduce) {
.mobile-hamburger, .hamburger-icon svg, .mobile-menu-overlay, .mobile-menu-panel, .mobile-nav-link, .mobile-nav-link::before {
  transition: none;
}
.mobile-hamburger:active {
  transform: none;
}
.mobile-nav-link:hover {
  transform: none;
}
.mobile-nav-link:active {
  transform: none;
}
}
body.mobile-menu-open {
  overflow: hidden;
}
</style>`}
                    ></Script>
                  </div>
                </div>
              </div>
            </div>
            <div className="container5">
              <div className="container6">
                <div className="navigation-container30">
                  <div className="navigation-container31">
                    <Script
                      html={`<script defer data-name="mobile-navigation">
(function(){
        ;(function () {
          const hamburgerBtn = document.getElementById("mobile-menu-toggle")
          const menuOverlay = document.getElementById("menuOverlay")
          const menuPanel = document.getElementById("menuPanel")
          const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
          function getCurrentPage() {
            const currentPath = window.location.pathname
            const pageName = currentPath.split("/").pop().replace(".html", "") || "index"
            return pageName
          }
          function hideCurrentPageLink() {
            const currentPage = getCurrentPage()
            mobileNavLinks.forEach((link) => {
              const parentLink = link.closest("a")
              if (parentLink) {
                const linkPage = parentLink.getAttribute("data-page")
                if (linkPage === currentPage) {
                  parentLink.style.display = "none"
                } else {
                  parentLink.style.display = "block"
                }
              }
            })
          }
          function openMenu() {
            hamburgerBtn.classList.add("active")
            menuOverlay.classList.add("active")
            menuPanel.classList.add("active")
            hamburgerBtn.setAttribute("aria-expanded", "true")
            document.body.classList.add("mobile-menu-open")
          }
          function closeMenu() {
            hamburgerBtn.classList.remove("active")
            menuOverlay.classList.remove("active")
            menuPanel.classList.remove("active")
            hamburgerBtn.setAttribute("aria-expanded", "false")
            document.body.classList.remove("mobile-menu-open")
          }
          function toggleMenu() {
            const isOpen = hamburgerBtn.classList.contains("active")
            if (isOpen) {
              closeMenu()
            } else {
              openMenu()
            }
          }
          hamburgerBtn.addEventListener("click", toggleMenu)
          menuOverlay.addEventListener("click", closeMenu)
          mobileNavLinks.forEach((link) => {
            link.addEventListener("click", () => {
              closeMenu()
            })
          })
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && hamburgerBtn.classList.contains("active")) {
              closeMenu()
            }
          })
          hideCurrentPageLink()
        })()
      })()
</script>`}
                    ></Script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu" className="navigation-mobile-menu">
          <div className="navigation-mobile-content">
            <a href="about.html">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-number">01</span>
                <span className="navigation-mobile-link-text">About Us</span>
              </div>
            </a>
            <a href="disciplines.html">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-number">02</span>
                <span className="navigation-mobile-link-text">
                  Disciplines &amp; Classes
                </span>
              </div>
            </a>
            <a href="teachers.html">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-number">03</span>
                <span className="navigation-mobile-link-text">Teachers</span>
              </div>
            </a>
            <a href="contacts.html">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-number">04</span>
                <span className="navigation-mobile-link-text">
                  Contacts &amp; Registration
                </span>
              </div>
            </a>
            <div className="navigation-mobile-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Instagram"
                  className="navigation-mobile-social-link"
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
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="YouTube"
                  className="navigation-mobile-social-link"
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
                      <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15l5-3l-5-3z"></path>
                    </g>
                  </svg>
                </div>
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer noopener">
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Telegram"
                  className="navigation-mobile-social-link"
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
        </div>
        <div id="navigation-backdrop" className="navigation-backdrop"></div>
      </nav>
      <div className="navigation-container32">
        <div className="navigation-container33">
          <Script
            html={`<style>
        @keyframes navigation-logo-pulse {0%,100% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.05);
opacity: 0.9;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container34">
        <div className="navigation-container35">
          <Script
            html={`<script defer data-name="navigation-creative-harmony">
(function(){
  // Theme management system
  const themeManager = {
    themeToggle: document.getElementById("theme-toggle"),

    init() {
      // Check for saved theme preference or default to system preference
      const savedTheme = localStorage.getItem("theme")
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light")

      this.setTheme(initialTheme)
      this.bindEvents()
    },

    bindEvents() {
      if (this.themeToggle) {
        this.themeToggle.addEventListener("click", () => this.toggleTheme())
      }

      // Listen for system theme changes
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            this.setTheme(e.matches ? "dark" : "light")
          }
        })
    },

    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"
      this.setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
    },

    setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme)

      // Update CSS variables to point to appropriate theme sources
      const root = document.documentElement
      const suffix = theme === "dark" ? "-dark" : "-light"

      // Get computed styles to access the theme source variables
      const styles = getComputedStyle(root)

      // Update active variables to point to theme-specific sources
      root.style.setProperty("--color-primary", \`var(--color-primary\${suffix})\`)
      root.style.setProperty(
        "--color-secondary",
        \`var(--color-secondary\${suffix})\`
      )
      root.style.setProperty("--color-accent", \`var(--color-accent\${suffix})\`)
      root.style.setProperty("--color-neutral", \`var(--color-neutral\${suffix})\`)
      root.style.setProperty("--color-surface", \`var(--color-surface\${suffix})\`)
      root.style.setProperty(
        "--color-on-surface",
        \`var(--color-on-surface\${suffix})\`
      )
      root.style.setProperty(
        "--color-on-surface-secondary",
        \`var(--color-on-surface-secondary\${suffix})\`
      )
      root.style.setProperty(
        "--color-on-primary",
        \`var(--color-on-primary\${suffix})\`
      )
    },
  }

  // Mobile menu management
  const mobileMenuManager = {
    menuToggle: document.getElementById("mobile-menu-toggle"),
    mobileMenu: document.getElementById("mobile-menu"),
    backdrop: document.getElementById("navigation-backdrop"),

    init() {
      this.bindEvents()
    },

    bindEvents() {
      if (this.menuToggle) {
        this.menuToggle.addEventListener("click", () => this.toggleMenu())
      }

      if (this.backdrop) {
        this.backdrop.addEventListener("click", () => this.closeMenu())
      }

      // Close menu on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isMenuOpen()) {
          this.closeMenu()
        }
      })

      // Close menu when clicking on a link
      if (this.mobileMenu) {
        const links = this.mobileMenu.querySelectorAll(
          ".navigation-mobile-link"
        )
        links.forEach((link) => {
          link.addEventListener("click", () => this.closeMenu())
        })
      }
    },

    toggleMenu() {
      if (this.isMenuOpen()) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    },

    openMenu() {
      if (this.mobileMenu) {
        this.mobileMenu.classList.add("navigation-mobile-menu-active")
      }
      if (this.backdrop) {
        this.backdrop.classList.add("navigation-backdrop-active")
      }
      if (this.menuToggle) {
        this.menuToggle.setAttribute("aria-expanded", "true")
      }
      document.body.style.overflow = "hidden"
    },

    closeMenu() {
      if (this.mobileMenu) {
        this.mobileMenu.classList.remove("navigation-mobile-menu-active")
      }
      if (this.backdrop) {
        this.backdrop.classList.remove("navigation-backdrop-active")
      }
      if (this.menuToggle) {
        this.menuToggle.setAttribute("aria-expanded", "false")
      }
      document.body.style.overflow = ""
    },

    isMenuOpen() {
      return (
        this.mobileMenu &&
        this.mobileMenu.classList.contains("navigation-mobile-menu-active")
      )
    },
  }

  // Scroll behavior for navigation elevation
  const scrollManager = {
    navigation: document.getElementById("navigation-main"),
    lastScroll: 0,

    init() {
      this.bindEvents()
      this.handleScroll()
    },

    bindEvents() {
      let ticking = false

      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll()
            ticking = false
          })
          ticking = true
        }
      })
    },

    handleScroll() {
      const currentScroll = window.pageYOffset

      if (this.navigation) {
        if (currentScroll > 50) {
          this.navigation.classList.add("navigation-scrolled")
        } else {
          this.navigation.classList.remove("navigation-scrolled")
        }
      }

      this.lastScroll = currentScroll
    },
  }

  // Initialize all managers
  themeManager.init()
  mobileMenuManager.init()
  scrollManager.init()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container36">
        <div className="navigation-container37">
          <Script
            html={`<script defer data-name="navigation-handler">
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigationLinks = document.querySelectorAll(".navigation-link")
  const themeToggleBtn = document.getElementById("themeToggleBtn")
  const themeToggleDesktop = document.getElementById("themeToggleDesktop")

  let isMenuOpen = false

  function getCurrentPage() {
    const path = window.location.pathname
    if (path === "/" || path === "/index.html") return "home"
    const pageName = path.split("/").pop().replace(".html", "")
    return pageName || "home"
  }

  function hideCurrentPageLink() {
    const currentPage = getCurrentPage()
    navigationLinks.forEach((link) => {
      const linkPage = link.getAttribute("data-page")
      if (linkPage === currentPage) {
        link.parentElement.style.display = "none"
      } else {
        link.parentElement.style.display = ""
      }
    })
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen
    hamburgerBtn.classList.toggle("active", isMenuOpen)
    navigationMenu.classList.toggle("active", isMenuOpen)
    hamburgerBtn.setAttribute("aria-expanded", isMenuOpen.toString())

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  function closeMenu() {
    if (isMenuOpen) {
      isMenuOpen = false
      hamburgerBtn.classList.remove("active")
      navigationMenu.classList.remove("active")
      hamburgerBtn.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  }

  hamburgerBtn.addEventListener("click", toggleMenu)

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu()
    })
  })

  document.addEventListener("click", (e) => {
    if (
      isMenuOpen &&
      !navigationMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu()
    }
  })

  function getThemeFromStorage() {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark"
    }

    return "light"
  }

  function applyTheme(theme) {
    const root = document.documentElement

    if (theme === "dark") {
      root.style.setProperty("--color-surface", "var(--color-surface-dark)")
      root.style.setProperty(
        "--color-surface-elevated",
        "var(--color-surface-elevated-dark)"
      )
      root.style.setProperty(
        "--color-on-surface",
        "var(--color-on-surface-dark)"
      )
      root.style.setProperty(
        "--color-on-surface-secondary",
        "var(--color-on-surface-secondary-dark)"
      )
      root.style.setProperty("--color-primary", "var(--color-primary-dark)")
      root.style.setProperty("--color-secondary", "var(--color-secondary-dark)")
      root.style.setProperty("--color-accent", "var(--color-accent-dark)")
      root.style.setProperty(
        "--color-on-primary",
        "var(--color-on-primary-dark)"
      )
      root.style.setProperty(
        "--color-on-secondary",
        "var(--color-on-secondary-dark)"
      )
      root.style.setProperty("--color-on-accent", "var(--color-on-accent-dark)")
      root.style.setProperty("--color-border", "var(--color-border-dark)")
      root.style.setProperty("--color-outline", "var(--color-outline-dark)")
      root.style.setProperty("--color-scrim", "var(--color-scrim-dark)")
      root.style.setProperty("--color-backplate", "var(--color-backplate-dark)")
      root.style.setProperty("--color-overlay", "var(--color-overlay-dark)")
      root.style.setProperty("--color-neutral", "var(--color-neutral-dark)")
    } else {
      root.style.setProperty("--color-surface", "var(--color-surface-light)")
      root.style.setProperty(
        "--color-surface-elevated",
        "var(--color-surface-elevated-light)"
      )
      root.style.setProperty(
        "--color-on-surface",
        "var(--color-on-surface-light)"
      )
      root.style.setProperty(
        "--color-on-surface-secondary",
        "var(--color-on-surface-secondary-light)"
      )
      root.style.setProperty("--color-primary", "var(--color-primary-light)")
      root.style.setProperty(
        "--color-secondary",
        "var(--color-secondary-light)"
      )
      root.style.setProperty("--color-accent", "var(--color-accent-light)")
      root.style.setProperty(
        "--color-on-primary",
        "var(--color-on-primary-light)"
      )
      root.style.setProperty(
        "--color-on-secondary",
        "var(--color-on-secondary-light)"
      )
      root.style.setProperty(
        "--color-on-accent",
        "var(--color-on-accent-light)"
      )
      root.style.setProperty("--color-border", "var(--color-border-light)")
      root.style.setProperty("--color-outline", "var(--color-outline-light)")
      root.style.setProperty("--color-scrim", "var(--color-scrim-light)")
      root.style.setProperty(
        "--color-backplate",
        "var(--color-backplate-light)"
      )
      root.style.setProperty("--color-overlay", "var(--color-overlay-light)")
      root.style.setProperty("--color-neutral", "var(--color-neutral-light)")
    }

    updateThemeIcons(theme)
  }

  function updateThemeIcons(theme) {
    const allButtons = [themeToggleBtn, themeToggleDesktop]

    allButtons.forEach((button) => {
      if (!button) return

      const lightIcon = button.querySelector(".theme-icon-light")
      const darkIcon = button.querySelector(".theme-icon-dark")

      if (theme === "dark") {
        if (lightIcon) lightIcon.style.display = "none"
        if (darkIcon) darkIcon.style.display = "block"
      } else {
        if (lightIcon) lightIcon.style.display = "block"
        if (darkIcon) darkIcon.style.display = "none"
      }
    })
  }

  function toggleTheme() {
    const currentTheme = getThemeFromStorage()
    const newTheme = currentTheme === "light" ? "dark" : "light"
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  const initialTheme = getThemeFromStorage()
  applyTheme(initialTheme)

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme)
  }

  if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener("click", toggleTheme)
  }

  hideCurrentPageLink()

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991 && isMenuOpen) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-mobile-navigation1">
        <div id="mobileMenu" className="mobile-menu">
          <div className="mobile-menu-content">
            <a href="#home">
              <div className="navigation-mobile-menu-link1 mobile-menu-link">
                <span>Home</span>
              </div>
            </a>
            <a href="#about">
              <div className="navigation-mobile-menu-link1 mobile-menu-link">
                <span>About Us</span>
              </div>
            </a>
            <a href="#contacts">
              <div className="navigation-mobile-menu-link1 mobile-menu-link">
                <span>Contacts and Registration</span>
              </div>
            </a>
            <a href="#disciplines">
              <div className="navigation-mobile-menu-link1 mobile-menu-link">
                <span>Disciplines &amp; Classes</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="navigation-container38">
        <div className="navigation-container39">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.mobile-hamburger-btn, .hamburger-icon, .mobile-menu, .mobile-menu-link {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container40">
        <div className="navigation-container41">
          <Script
            html={`<script defer data-name="mobile-navigation">
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const menuLinks = document.querySelectorAll(".mobile-menu-link")

  function toggleMenu() {
    const isActive = hamburgerBtn.classList.contains("active")

    if (isActive) {
      hamburgerBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
      hamburgerBtn.setAttribute("aria-expanded", "false")
    } else {
      hamburgerBtn.classList.add("active")
      mobileMenu.classList.add("active")
      hamburgerBtn.setAttribute("aria-expanded", "true")
    }
  }

  function closeMenu() {
    hamburgerBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
    hamburgerBtn.setAttribute("aria-expanded", "false")
  }

  hamburgerBtn.addEventListener("click", toggleMenu)

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("click", (e) => {
    const isClickInsideNav = e.target.closest(".mobile-navigation")
    const isMenuActive = mobileMenu.classList.contains("active")

    if (!isClickInsideNav && isMenuActive) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container42">
        <div className="navigation-container43">
          <Script
            html={`<script defer data-name="navigation-menu">
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : ""
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  })

  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      hamburgerBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
