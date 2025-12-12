import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container10">
      <Helmet>
        <title>About-Us - Musica</title>
        <meta property="og:title" content="About-Us - Musica" />
        <link rel="canonical" href="https://www.mikealina.ru/about-us" />
      </Helmet>
      <Navigation></Navigation>
      <div className="navigation-container">
        <a href="index.html">
          <div
            aria-label="Creative Harmony Homepage"
            className="navigation-logo"
          >
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
              <span className="navigation-logo-main">Звук Вокруг</span>
            </div>
          </div>
        </a>
        <div className="navigation-links">
          <Link to="/about-us">
            <div className="about-us-thq-navigation-link-elm1 navigation-link">
              <span className="navigation-link-text">О нас</span>
              <span className="navigation-link-underline"></span>
            </div>
          </Link>
          <Link to="/disciplines-classes">
            <div className="about-us-thq-navigation-link-elm2 navigation-link">
              <span className="navigation-link-text">
                            Дисциплины 
              </span>
              <span className="navigation-link-underline"></span>
            </div>
          </Link>
          <Link to="/contacts-and-registration">
            <div className="about-us-thq-navigation-link-elm3 navigation-link">
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
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
                className="navigation-social-link"
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
                className="navigation-social-link"
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
                    <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15l5-3l-5-3z"></path>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://t.me/soundaround_club"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Telegram"
                className="navigation-social-link"
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
            </a>
          </div>
          <button
            id="theme-toggle"
            aria-label="Toggle dark mode"
            className="navigation-theme-toggle"
          >
            <span className="about-us-thq-navigation-theme-icon-elm1">
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
                  <circle r="4" cx="12" cy="12"></circle>
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </g>
              </svg>
            </span>
            <span className="about-us-thq-navigation-theme-icon-elm2">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <span className="about-us-thq-navigation-mobile-icon-elm1">
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
            <span className="about-us-thq-navigation-mobile-icon-elm2">
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
            <div id="menuOverlay" className="mobile-menu-overlay"></div>
            <div id="menuPanel" className="mobile-menu-panel">
              <nav role="navigation" className="mobile-menu-nav">
                <a href="/index.html" data-page="index">
                  <div className="mobile-nav-link">
                    <span>Home</span>
                  </div>
                </a>
                <a href="/about.html" data-page="about">
                  <div className="mobile-nav-link">
                    <span>About</span>
                  </div>
                </a>
                <a href="/contacts.html" data-page="contacts">
                  <div className="mobile-nav-link">
                    <span>
                      {' '}
                      Contacts
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
                <a href="/disciplines.html" data-page="disciplines">
                  <div className="mobile-nav-link">
                    <span>
                      {' '}
                      Disciplines
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </nav>
            </div>
          </nav>
          <div className="about-us-container11">
            <div className="about-us-container12">
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
          <div className="about-us-container13">
            <div className="about-us-container14">
              <Script
                html={`<script defer data-name="mobile-navigation">
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn")
  const menuOverlay = document.getElementById("menuOverlay")
  const menuPanel = document.getElementById("menuPanel")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  function getCurrentPage() {
    const currentPath = window.location.pathname
    const pageName =
      currentPath.split("/").pop().replace(".html", "") || "index"
    return pageName
  }

  function hideCurrentPageLink() {
    const currentPage = getCurrentPage()

    mobileNavLinks.forEach((link) => {
      const linkPage = link.getAttribute("data-page")
      if (linkPage === currentPage) {
        link.classList.add("current-page")
      } else {
        link.classList.remove("current-page")
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
</script>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-container15">
        <div className="about-us-container16">
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
      <section id="our-team" className="team-section">
        <div className="team-container">
          <div className="team-faculty">
            <section className="founder-bio-section">
              <div className="founder-bio-container">
                <div className="founder-bio-content">
                  <div className="founder-text-content">
                    <h2 className="section-title about-us-founder-title">
                      Жирова Анна
                    </h2>
                    <div className="founder-subtitle">
                      <span>Основатель и Педагог </span>
                    </div>
                    <div className="founder-description">
                      <p className="section-content">
                        {' '}
                        Сегодня познакомлю вас с собой — я Анна, педагог
                        эстрадно-джазового вокала с более чем 18-летним опытом.
                        Я выпускница колледжа при академии им. Гнесиных и МПГУ,
                        а также проходила повышение квалификации в Berklee
                        College of Music (США). Моя задача — помочь вам
                        преодолеть комплексы, раскрыть вокальный потенциал и
                        стать уверенными в себе. Я совмещаю теорию и практику,
                        подбираю подход к каждому и веду к реальным результатам.
                        Рекомендую выходить из зоны комфорта через караоке,
                        выступления и записи — это поможет закрепить навыки и
                        раскрыть талант. Жду вас на занятиях!
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                      <p className="section-content">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="founder-credentials">
                      <div className="credential-item">
                        <div className="credential-number">
                          <span>17+</span>
                        </div>
                        <div className="credential-label">
                          <span>лет стажа</span>
                        </div>
                      </div>
                      <div className="credential-item">
                        <div className="credential-number">
                          <span>      50+</span>
                        </div>
                        <div className="credential-label">
                          <span>Успешных меровриятий</span>
                        </div>
                      </div>
                      <div className="credential-item">
                        <div className="credential-number">
                          <span>20+</span>
                        </div>
                        <div className="credential-label">
                          <span>грамот и наград</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="founder-image-wrapper">
                    <div className="founder-image-decorative"></div>
                    <img
                      alt="Alexandra Sokolova - Founder and Creative Director"
                      src="/Преподы/%D0%B0%D0%BD%D0%BD%D0%B0-400w.jpg"
                      className="founder-image"
                    />
                  </div>
                </div>
              </div>
            </section>
            <h3 className="faculty-heading">Наши преподаватели</h3>
            <div className="faculty-grid">
              <div className="faculty-card">
                <div className="faculty-image">
                  <img
                    alt="Marcus Levit - Guitar &amp; Composition Teacher"
                    src="/Преподы/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-1500w.jpg"
                    loading="lazy"
                  />
                  <div className="faculty-overlay">
                    <span className="faculty-discipline">
                      Guitar &amp; Composition
                    </span>
                  </div>
                </div>
                <div className="faculty-info">
                  <h4>Александр</h4>
                  <p>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Саша — педагог по гитаре, профессиональный музыкант.
                    </span>
                    <br></br>
                    <span>Образование:</span>
                    <br></br>
                    <span>Старооскольская Музыкальная Школа.</span>
                    <br></br>
                    <br></br>
                    <span>
                      Московская джазовая студия C JAM CLUB (гитара, джазовые
                      инструменты).
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Достижения:20 лет выступлений на фестивалях, гастролях,
                      клубах.Участник групп разных жанров, автор песен,
                      аранжировок, ремиксов.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Методика: помогает расслабиться, убрать комплексы через
                      любимые песни.Стили: рок, поп, метал, фанк.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    Award-winning composer and session guitarist with a decade
                    of touring and studio credits. Specializes in contemporary
                    fingerstyle, songwriting craft, and arranging.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <img
                    alt="Liza Park - Piano &amp; Theory Teacher"
                    src="/Преподы/%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D1%8F-1500w.jpg"
                    loading="lazy"
                  />
                  <div className="faculty-overlay">
                    <span className="faculty-discipline">Фано &amp; вокал</span>
                  </div>
                </div>
                <div className="faculty-info">
                  <h4>Анастасия </h4>
                  <p>
                    <span>Анастасия — педагог эстрадного вокала.</span>
                    <br></br>
                    <span>
                      Образование (Свердловское училище с отличием, Berklee,
                      HSE).
                    </span>
                    <br></br>
                    <span>4 года опыта, ученики — лауреаты конкурсов.</span>
                    <br></br>
                    <span>
                      Индивидуальный подход, снятие зажима сцены, высокие ноты.
                    </span>
                    <br></br>
                    <span>Жанры: поп, рок, джаз, соул.</span>
                    <br></br>
                    <span>Пишет песни/аранжировки, позитивная атмосфера.</span>
                    <br></br>
                    Dual background in classical performance and contemporary
                    accompaniment. Emphasizes expressive touch, harmonic
                    literacy, and collaborative skills for chamber and ensemble
                    settings.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <img
                    alt="Dmitri Sokolov - Acting &amp; Stagecraft Teacher"
                    src="/Преподы/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B01-1500w.jpg"
                    loading="lazy"
                  />
                  <div className="faculty-overlay">
                    <span className="faculty-discipline">
                      Вокалист &amp; продюсер
                    </span>
                  </div>
                </div>
                <div className="faculty-info">
                  <h4>Александа</h4>
                  <p>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Александра — выпускница ГМУЭДИ (колледжа при Академии им.
                      Гнесиных), педагог эстрадного вокала, артист и
                      руководитель коллектива.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Обучает техникам качественного и свободного
                      звукоизвлечения, работает с вокальными стилями: поп,
                      R&amp;B, мюзиклы, альтернативу и рок.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Создает комфортную атмосферу, помогает раскрыть
                      музыкальный потенциал учеников через погружение в музыку.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>Опыт преподавания — 8 лет.</span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    Actor-director with extensive theatre and film credits.
                    Trains students in character work, scene study, audition
                    technique, and the practical mechanics of stage presence.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <img
                    alt="Raya Chen - Vocals &amp; Vocal Health Teacher"
                    src="/Преподы/%D0%B1%D0%BE%D1%80%D0%B8%D1%81-1500w.jpg"
                    loading="lazy"
                  />
                  <div className="faculty-overlay">
                    <span className="faculty-discipline">гитара</span>
                  </div>
                </div>
                <div className="faculty-info">
                  <h4>Борис </h4>
                  <p>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Борис — педагог по гитаре.</span>
                    <br></br>
                    <span>
                      Выпускник МОМК им. Прокофьева с отличием, лауреат
                      конкурсов.
                    </span>
                    <br></br>
                    <span>Бас-гитарист Lunar Miura, сольные выступления.</span>
                    <br></br>
                    <span>
                      Учит классику, акустику, электрогитару, бас, укулеле.
                    </span>
                    <br></br>
                    <span>Любой стиль: рок, джаз, классика.</span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    Combines conservatory technique with modern stylistic
                    coaching. Certified in vocal pedagogy and contemporary
                    styles, prioritizing sustainable technique and performance
                    psychology.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <img
                    alt="Elena Morozova - Production &amp; Studio Techniques Teacher"
                    src="/Преподы/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-1500w.jpg"
                    loading="lazy"
                  />
                  <div className="faculty-overlay">
                    <span className="faculty-discipline">
                      Production &amp; Studio
                    </span>
                  </div>
                </div>
                <div className="faculty-info">
                  <h4>Кирилл</h4>
                  <p>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Кирилл - педагог по гитаре</span>
                    <br></br>
                    <span>
                      Образование: Московский Педагогический Государственный
                      Университет
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Достижения: В составе своей музыкальной группы попадал в
                      редакторские плейлисты стриминговых сервисов и был в
                      ротации радио &quot;Мегаполис&quot;.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      Методика: структура занятий для эффективной музыки с
                      удовольствием и производительностью.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Стили: j-rock, math-rock, metalcore
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    Producer and sound engineer focused on bridging artistic
                    intent with technical excellence. Teaches home-studio setup,
                    DAW workflow, mixing basics, and the business of releasing
                    music.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faculty-card">
                <div className="faculty-image">
                  <img
                    alt="Additional Faculty Member"
                    src="/Преподы/%D0%B8%D0%B2%D0%B0%D0%BD-1500w.jpg"
                    loading="lazy"
                  />
                  <div className="faculty-overlay">
                    <span className="faculty-discipline">
                      Ensemble Director
                    </span>
                  </div>
                </div>
                <div className="faculty-info">
                  <h4>Иван </h4>
                  <p>
                    <span> Иван — педагог по эстрадному вокалу.</span>
                    <br></br>
                    <span>
                      Образование: выпускник Московского Театрального Колледжа
                      им. Филатова (актер музыкального театра).
                    </span>
                    <br></br>
                    <span>
                      Достижения: Гран-при «Колыбель России» (2023), 1 место
                      «Sound of Voice» (2023), победитель «Солдатский конверт»
                      (2018).
                    </span>
                    <br></br>
                    <span>
                      Учит: эстраду, джаз, академическое пение, актерство,
                      сценическую речь. Снимает зажимы для свободного
                      исполнения.
                    </span>
                    <br></br>
                    <span>
                      Стили: эстрада, джаз, мюзикл. Создает комфорт, помогает
                      выразить эмоции.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    Beyond private lessons, the team leads ensemble labs,
                    cross-discipline projects, and industry-ready showcases.
                    Each teacher mentors portfolio and rehearsal work.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-container17">
              <div className="about-us-container18">
                <Script
                  html={`<style>
@media (prefers-reduced-motion: reduce) {
.founder-text-content, .founder-image-wrapper {
  animation: none;
  opacity: 1;
}
.founder-image, .founder-image-decorative {
  transition: none;
}
.founder-image-wrapper:hover .founder-image {
  transform: none;
}
.founder-image-wrapper:hover .founder-image-decorative {
  transform: none;
}
}
</style>`}
                ></Script>
              </div>
            </div>
            <div className="about-us-container19">
              <div className="about-us-container20">
                <Script
                  html={`<style>
        @keyframes fadeSlideUp {0% {opacity: 0;
transform: translateY(40px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes fadeScaleIn {0% {opacity: 0;
transform: scale(0.9);}
100% {opacity: 1;
transform: scale(1);}}
        </style> `}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="branding" className="branding-section">
        <div className="branding-container">
          <div className="branding-visual">
            <div className="branding-mosaic">
              <div className="mosaic-main">
                <img
                  alt="Live performance at Creative Harmony"
                  src="/Выступления/%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0-1500w.jpg"
                  loading="lazy"
                />
              </div>
              <div className="mosaic-secondary">
                <img
                  alt="Student performance"
                  src="/Выступления/%D0%BE%D0%BD%D0%B0-1500w.jpg"
                  loading="lazy"
                />
              </div>
              <div className="mosaic-tertiary">
                <img
                  alt="Creative moment"
                  src="/Выступления/%D1%81%D0%B0%D0%BD%D1%8F-1500w.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="branding-editorial">
            <div className="branding-features">
              <div className="brand-feature">
                <div className="feature-icon">
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
                      <path d="M9 18V5l12-2v13"></path>
                      <circle r="3" cx="6" cy="18"></circle>
                      <circle r="3" cx="18" cy="16"></circle>
                    </g>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Галерея </h4>
                  <p>Трогательные моменты выступлений наших учеников</p>
                </div>
              </div>
            </div>
            <div className="branding-gallery">
              <div className="gallery-item">
                <img
                  alt="House concert moment"
                  src="/события/%D0%BA%D0%BE%D0%BD%D1%86-1500w.jpg"
                  loading="lazy"
                />
                <span className="about-us-thq-gallery-caption-elm1 gallery-caption">
                  Концерт— Осень 2024
                </span>
              </div>
              <div className="gallery-item">
                <img
                  alt="Masterclass session"
                  src="/события/%D0%BE%D0%BD%D0%B8-1500w.jpg"
                  loading="lazy"
                />
                <span className="about-us-thq-gallery-caption-elm2 gallery-caption">
                  Мастер классна Гитаре
                </span>
              </div>
              <div className="gallery-item">
                <img
                  alt="Recording session"
                  src="/события/%D1%84%D0%B0%D0%BA%D0%B8-1500w.jpg"
                  loading="lazy"
                />
                <span className="about-us-thq-gallery-caption-elm3 gallery-caption">
                  Учеба
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="disciplines"
        className="about-us-thq-disciplines-section-elm disciplines-section"
      >
        <div className="disciplines-container about-us-thq-disciplines-container-elm">
          <div className="about-us-thq-disciplines-header-elm disciplines-header"></div>
          <h2 className="section-title about-us-section-title about-us-thq-section-title-elm2">
            Наши дисциплины 
          </h2>
          <div className="disciplines-grid">
            <div className="about-us-discipline-card">
              <div className="discipline-icon">
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
                    <path d="M9 5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z"></path>
                    <path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4"></path>
                  </g>
                </svg>
              </div>
              <h3>Вокал</h3>
              <p>
                {' '}
                Обучение современному  пению с упором на дыхание, звучание и
                технику исполнения.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="discipline-pathways">
                <span className="pathway-tag">Сердний</span>
                <span className="pathway-tag">Начальный</span>
                <span className="pathway-tag">Продвинутый </span>
              </div>
            </div>
            <div className="about-us-discipline-card">
              <div className="discipline-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m11.9 12.1l4.514-4.514M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4zM6 16l2 2m.23-8.15A3 3 0 0 1 11 8a5 5 0 0 1 5 5a3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4a6 6 0 0 1-6-6a4 4 0 0 1 4-4a2 2 0 0 0 1.85-1.23z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3>Гитара</h3>
              <p>
                Классическая, электрогитара, бас-гитара, укулеле. Техника игры,
                аккорды, игра пальцами и импровизация.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="discipline-pathways">
                <span className="pathway-tag">Основы</span>
                <span className="pathway-tag">Группы</span>
                <span className="pathway-tag">Композиции</span>
              </div>
            </div>
            <div className="about-us-discipline-card">
              <div className="discipline-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8M2 14h20M6 14v4m4-4v4m4-4v4m4-4v4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3>Фортепиано</h3>
              <p>
                {' '}
                От основ игры на клавишах до джазовых аккордов, игры под песню.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="discipline-pathways">
                <span className="pathway-tag">Ноты</span>
                <span className="pathway-tag">Классика</span>
                <span className="pathway-tag">Креатив</span>
              </div>
            </div>
            <div className="about-us-discipline-card">
              <div className="discipline-icon">
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
                    <path d="M10 11h.01M14 6h.01M18 6h.01M6.5 13.1h.01M22 5c0 9-4 12-6 12s-6-3-6-12q0-3 6-3c6 0 6 1 6 3"></path>
                    <path d="M17.4 9.9c-.8.8-2 .8-2.8 0m-4.5-2.8C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6c4.5 7.8 9.5 8.4 11.2 7.4c.9-.5 1.9-2.1 1.9-4.7"></path>
                    <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"></path>
                  </g>
                </svg>
              </div>
              <h3>Укулеле</h3>
              <p>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  От основ игры на укулеле до джазовых аккордов, боя под песни и
                  создания мелодий.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                Scene study, improvisation, stage presence, and audition
                preparation for performers
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="discipline-pathways">
                <span className="pathway-tag">Новое</span>
                <span className="pathway-tag">Музыкальный вкус</span>
              </div>
            </div>
            <div className="about-us-discipline-card">
              <div className="discipline-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3>Написание песен &amp; Продюсирование</h3>
              <p>
                {' '}
                Совместные мастер-классы по созданию текстов, мелодии,
                аранжировке и стратегии выпуска.
              </p>
              <div className="discipline-pathways">
                <span className="pathway-tag">Песни</span>
                <span className="pathway-tag">Продюсирование</span>
                <span className="pathway-tag">Релизы</span>
              </div>
            </div>
            <div className="about-us-discipline-card">
              <div className="discipline-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h3>Вокальный ансамбль</h3>
              <p>
                {' '}
                Маленькие ансамбли и группы, которые отрабатывают песни и навыки
                живых выступлений.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="discipline-pathways">
                <span className="pathway-tag">Все уровни</span>
                <span className="pathway-tag">Коллаборация</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="social-contact" className="about-us-contact-section">
        <div className="about-us-thq-contact-container-elm about-us-contact-container"></div>
      </section>
      <div className="about-us-container21">
        <div className="about-us-container22">
          <Script
            html={`<style>
* {
  transition: background-color 0.3s ease, color 0.3s ease,
      border-color 0.3s ease;
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="about-us-container23">
        <div className="about-us-container24">
          <Script
            html={`<script defer data-name="about-us-page">
(function(){
  // Scroll-triggered fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply fade-in effect to cards and sections
  const animatedElements = document.querySelectorAll(
    ".pillar-card, .audience-card, .faculty-card, .discipline-card, .schedule-block, .brand-feature"
  )

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(8px)"
    el.style.transition = \`opacity \${600 + index * 50}ms ease, transform \${
      600 + index * 50
    }ms cubic-bezier(0.4, 0.0, 0.2, 1)\`
    fadeInObserver.observe(el)
  })

  // Portrait parallax effect
  const portraitCards = document.querySelectorAll(".portrait-card")

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.pageYOffset

      portraitCards.forEach((card, index) => {
        const speed = 0.5 + index * 0.1
        const yPos = -(scrolled * speed * 0.02)
        card.style.transform = \`translateY(\${yPos}px)\`
      })
    },
    { passive: true }
  )

  // Trial CTA button interaction
  const trialCtaButtons = document.querySelectorAll(".trial-cta, .hero-cta")

  trialCtaButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()

      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.style.position = "absolute"
      ripple.style.borderRadius = "50%"
      ripple.style.background = "rgba(255, 255, 255, 0.5)"
      ripple.style.transform = "scale(0)"
      ripple.style.animation = "ripple 600ms ease-out"
      ripple.style.pointerEvents = "none"

      button.style.position = "relative"
      button.style.overflow = "hidden"
      button.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)

      // Simulate form opening (replace with actual form logic)
      console.log("Opening trial lesson registration form...")
    })
  })

  // Add ripple animation
  const style = document.createElement("style")
  style.textContent = \`
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
\`
  document.head.appendChild(style)

  // Smooth reveal for mosaic images
  const mosaicImages = document.querySelectorAll(".branding-mosaic img")

  mosaicImages.forEach((img, index) => {
    img.style.opacity = "0"
    img.style.transform = "scale(0.95)"

    img.addEventListener("load", () => {
      setTimeout(() => {
        img.style.transition = \`opacity \${
          400 + index * 100
        }ms ease, transform \${
          400 + index * 100
        }ms cubic-bezier(0.4, 0.0, 0.2, 1)\`
        img.style.opacity = "1"
        img.style.transform = "scale(1)"
      }, index * 100)
    })

    if (img.complete) {
      img.dispatchEvent(new Event("load"))
    }
  })

  // Enhanced hover effects for faculty cards
  const facultyCards = document.querySelectorAll(".faculty-card")

  facultyCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const overlay = card.querySelector(".faculty-overlay")
      if (overlay) {
        overlay.style.transform = "translateY(0)"
      }
    })

    card.addEventListener("mouseleave", () => {
      const overlay = card.querySelector(".faculty-overlay")
      if (overlay) {
        overlay.style.transform = "translateY(2px)"
      }
    })
  })

  // Social links tracking
  const socialLinks = document.querySelectorAll(".social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const platform = link.getAttribute("aria-label")
      console.log(\`Social link clicked: \${platform}\`)
    })
  })

  // Quick action buttons
  const actionButtons = document.querySelectorAll(".action-btn")

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.querySelector("span").textContent
      console.log(\`Quick action: \${action}\`)
    })
  })

  // Accessibility: Focus management
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-nav")
    }
  })

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-nav")
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <div className="about-us-thq-navigation-wrapper-elm navigation-wrapper">
        <nav id="navigation-main" className="about-us-navigation-creative">
          <div id="mobile-menu" className="about-us-navigation-mobile-menu">
            <div className="about-us-navigation-mobile-content">
              <a href="about-us.html">
                <div className="about-us-navigation-mobile-link">
                  <span className="about-us-navigation-mobile-link-number">
                    01
                  </span>
                  <span className="about-us-navigation-mobile-link-text">
                    О нас
                  </span>
                </div>
              </a>
              <a href="disciplines-classes.html">
                <div className="about-us-navigation-mobile-link">
                  <span className="about-us-navigation-mobile-link-number">
                    02
                  </span>
                  <span className="about-us-navigation-mobile-link-text">
                    Дисциплины
                  </span>
                </div>
              </a>
              <a href="contactsand-registration.html">
                <div className="about-us-navigation-mobile-link">
                  <span className="about-us-navigation-mobile-link-number">
                    03
                  </span>
                  <span className="about-us-navigation-mobile-link-text">
                    {' '}
                    Контакты &amp; Регистрация
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <div className="about-us-navigation-mobile-social">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label="Instagram"
                    className="about-us-navigation-mobile-social-link"
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
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label="YouTube"
                    className="about-us-navigation-mobile-social-link"
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
                <a
                  href="https://t.me/soundaround_club"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label="Telegram"
                    className="about-us-navigation-mobile-social-link"
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
          <div
            id="navigation-backdrop"
            className="about-us-navigation-backdrop"
          ></div>
        </nav>
      </div>
      <div className="about-us-container25">
        <div className="about-us-container26">
          <Script
            html={`<style>
[data-theme="dark"] .navigation-theme-icon-light {
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -50%) rotate(-90deg) scale(0);
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
      <div className="about-us-container27">
        <div className="about-us-container28">
          <Script
            html={`<script defer data-name="navigation-creative-harmony">
(function(){
  const themeManager = {
    themeToggle: document.getElementById("theme-toggle"),
    init() {
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
    },
  }

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
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isMenuOpen()) {
          this.closeMenu()
        }
      })
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

  themeManager.init()
  mobileMenuManager.init()
  scrollManager.init()
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
