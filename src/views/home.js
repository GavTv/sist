import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Musica</title>
        <meta property="og:title" content="Musica" />
        <link rel="canonical" href="https://www.mikealina.ru/" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
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
      <section
        role="region"
        aria-labelledby="hero-heading"
        className="home-thq-hero-elm hero"
      >
        <div className="hero__container home-thq-herocontainer-elm">
          <div className="hero__content home-thq-herocontent-elm">
            <p className="hero__subtitle">
              Уютная музыкальная школа-студия в районе
              &quot;Хорошево-Мнёвники&quot;
            </p>
            <span className="hero__description">
              {' '}
              Откройте для себя свой голос, инструмент или сценическое
              мастерство в студии, созданной для смелых открытий. Наша
              творческая школа сочетает строгую педагогику с вдохновением от
              творчества, поэтому учащиеся всех возрастов совершенствуют
              технику, обретают уверенность в себе и создают работы, которые
              привлекают аудиторию.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="hero__cta-group">
              <a
                href="https://api.whatsapp.com/send/?phone=79162353381&amp;text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5+%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5&amp;type=phone_number&amp;app_absent=0"
                id="trial-cta"
                aria-label="Sign up for a trial lesson"
                target="_blank"
                rel="noreferrer noopener"
                className="home-thq-btn-elm1 btn-lg btn btn-primary"
              >
                {' '}
                Запишитесь на пробный урок
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
            </div>
            <a href="tel:+7(916) 235-33-81">
              <div
                role="navigation"
                aria-label="Quick contact"
                className="home-thq-herocontact-card-elm hero__contact-card"
              >
                <div className="contact-card__icon">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                </div>
                <div className="contact-card__content">
                  <span className="contact-card__label">Call us:</span>
                  <div className="contact-card__link">
                    <span>
                      <span>+7(916) 235-33-81</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="hero__visual">
            <div className="visual-collage home-thq-visual-collage-elm">
              <div className="collage__image collage__image--1">
                <img
                  alt="Young musicians practicing in modern studio"
                  src="/Выступления/%D0%B4%D0%B2%D0%BE%D0%B5-1500w.jpg"
                  loading="lazy"
                />
                <div className="image__label">
                  <span>Живые выступления </span>
                </div>
              </div>
              <div className="collage__image collage__image--2">
                <img
                  alt="Singer performing with microphone"
                  src="/Выступления/%D0%BE%D0%BD%D0%B0-1500w.jpg"
                  loading="lazy"
                  className="home-image2"
                />
              </div>
              <div className="collage__image collage__image--3 home-thq-collageimage-elm3">
                <img
                  alt="Piano in elegant studio space"
                  src="/Выступления/%D0%BE%D0%B4%D0%BD%D0%B0-400w.jpg"
                  loading="lazy"
                  className="home-image3"
                />
              </div>
              <div className="home-thq-collagequick-links-elm collage__quick-links"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        role="region"
        aria-labelledby="why-us-heading"
        className="why-us home-thq-why-us-elm"
      >
        <div className="why-us__container">
          <div className="why-us__media">
            <video
              src="/видео/99.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              aria-hidden="true"
              playsInline="true"
              className="media__video home-thq-mediavideo-elm"
            ></video>
          </div>
          <div className="why-us__content">
            <article className="content-card">
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
                className="card__icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                  <circle r="2" cx="4" cy="20"></circle>
                </g>
              </svg>
              <h3 className="card__title">Студийный Вайб</h3>
              <p className="card__description">
                {' '}
                Наша программа строится на чувственности музыканта и
                исполнителя. Главный акцент — свобода самовыражения,
                внимательное наставничество и совместное творчество в тёплой,
                вдохновляющей атмосфере студии
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </article>
            <article className="content-card">
              <svg
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
                className="card__icon"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <h3 className="card__title">Почему выбирают нас?</h3>
              <ul className="card__list">
                <li>
                  <span>
                    {' '}
                    Индивидуальные учебные планы, сочетающие развитие навыков с
                    проектной деятельностью
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <span>
                    Небольшие размеры класса для получения глубокой обратной
                    связи
                  </span>
                </li>
                <li>
                  <span>
                    Наглядный путь от пробного урока к профессионализму 
                  </span>
                </li>
              </ul>
            </article>
            <div className="content-card content-card--video-grid">
              <h4 className="card__subtitle">Наша студия (скоро будет Вау!)</h4>
              <div className="video-grid">
                <div className="video-thumbnail">
                  <img
                    alt="Студи я просмотры"
                    src="/события/%D0%B0%D0%B9-1500w.png"
                    loading="lazy"
                  />
                </div>
                <div className="video-thumbnail">
                  <img
                    alt="Запись звук и гитары "
                    src="/события/%D0%B0%D0%B9-1500w.png"
                    loading="lazy"
                  />
                </div>
                <div className="video-thumbnail">
                  <img
                    alt="Креатив и работа "
                    src="/события/%D0%B0%D0%B9-1500w.png"
                    loading="lazy"
                  />
                </div>
                <div className="video-thumbnail">
                  <img
                    alt="Художества"
                    src="/события/%D0%B0%D0%B9-1500w.png"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        role="region"
        aria-labelledby="highlights-heading"
        className="photo-highlights"
      >
        <section className="upcoming-events-section">
          <div className="events-container">
            <h2 className="section-title">Предстоящие события</h2>
            <div id="eventCard" className="event-card">
              <div className="event-image-wrapper">
                <img
                  alt="Master class with guest artist in studio"
                  src="/события/%D0%BA%D0%BE%D0%BD%D1%861-1500w.jpg"
                  className="event-image"
                />
              </div>
              <div className="event-content">
                <h3 className="home-thq-event-title-elm event-title">
                  <span className="home-text18">Отчетный концерт</span>
                  <br className="home-text19"></br>
                  <span className="home-text20">Звук Вокруг</span>
                  <br></br>
                </h3>
                <div className="event-meta">
                  <div className="event-meta-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="event-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 2v4m8-4v4"></path>
                        <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                        <path d="M3 10h18"></path>
                      </g>
                    </svg>
                    <span className="event-date">14 декабря , 2025</span>
                  </div>
                  <div className="event-meta-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="event-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 6v6l4 2"></path>
                        <circle r="10" cx="12" cy="12"></circle>
                      </g>
                    </svg>
                    <span className="event-time">13:30 </span>
                  </div>
                </div>
                <p className="event-description">
                  <span>Адрес:  &quot; Лайф паб &quot;</span>
                  <br></br>
                  <span>ул.Фридриха Энгельса, д.20, стр.1</span>
                  <br></br>
                  <br></br>
                  <span>По вопросам участия : +7 916-33-81</span>
                  <br></br>
                  <span>
                    Если Вы хотите принять участие на Отчетном концерте,
                    нажимайте кнопку ниже!
                  </span>
                  <br></br>
                  Join us for an exclusive master class featuring a renowned
                  musician. Limited seats available.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=79162353381&amp;text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5+%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5&amp;type=phone_number&amp;app_absent=0"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-thq-btn-elm2 btn event-cta btn-primary"
                >
                  Хочу учавствовать! 
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="upcoming-events-scroll-animation">
(function(){
  const eventCard = document.getElementById("eventCard")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  }

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)

  if (eventCard) {
    observer.observe(eventCard)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<style>
        @keyframes heroFadeIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes slideIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container8">
        <div className="home-container9">
          <Script
            html={`<script defer data-name="homepage">
(function(){
  // Discipline tabs functionality
  const disciplineTabs = document.querySelectorAll(
    ".disciplines__tabs .tab-button"
  )
  disciplineTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      disciplineTabs.forEach((t) => {
        t.classList.remove("active")
        t.setAttribute("aria-selected", "false")
      })
      tab.classList.add("active")
      tab.setAttribute("aria-selected", "true")
    })

    // Keyboard navigation
    tab.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault()
        const nextTab = disciplineTabs[(index + 1) % disciplineTabs.length]
        nextTab.focus()
        nextTab.click()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        const prevTab =
          disciplineTabs[
            (index - 1 + disciplineTabs.length) % disciplineTabs.length
          ]
        prevTab.focus()
        prevTab.click()
      }
    })
  })

  // Photo highlights tabs
  const photoTabs = document.querySelectorAll(".highlights__tabs .tab-button")
  photoTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      photoTabs.forEach((t) => {
        t.classList.remove("active")
        t.setAttribute("aria-selected", "false")
      })
      tab.classList.add("active")
      tab.setAttribute("aria-selected", "true")
    })
  })

  // Student spotlight carousel rotation
  const spotlightSlides = [
    {
      quote:
        '"Creative Harmony changed how I hear music. My vocal coach helped me find my voice and stage confidence — I performed my first solo at the house concert within three months."',
      name: "Maya",
      discipline: "Pop Vocals",
      level: "Beginner → Intermediate",
    },
    {
      quote:
        '"From songwriting sparks to a polished demo: the Song on Demand team produced a track that truly represents my sound. Professional, fast, and deeply collaborative."',
      name: "Anton",
      discipline: "Singer-Songwriter",
      level: "Advanced",
    },
    {
      quote:
        '"The guitar program pushed my technique and expanded my musical vocabulary. Teachers tailor lessons to goals — I finally nailed fingerstyle arrangements I thought were years away."',
      name: "Lena",
      discipline: "Guitar",
      level: "Intermediate",
    },
    {
      quote:
        '"Acting workshops at Creative Harmony unlocked improvisation skills and on-camera presence. Casting directors noticed the difference in my audition tape."',
      name: "Sofia",
      discipline: "Acting",
      level: "Advanced",
    },
  ]

  let currentSlideIndex = 0
  const spotlightCarousel = document.querySelector(".spotlight__carousel")

  function rotateSpotlight() {
    currentSlideIndex = (currentSlideIndex + 1) % spotlightSlides.length
    const slide = spotlightSlides[currentSlideIndex]

    const slideCard = spotlightCarousel.querySelector(".slide__card")
    slideCard.style.opacity = "0"
    slideCard.style.transform = "translateY(20px)"

    setTimeout(() => {
      slideCard.querySelector(".card__quote p").textContent = slide.quote
      slideCard.querySelector(".card__attribution strong").textContent =
        slide.name
      slideCard.querySelector(".meta-chip:first-child").textContent =
        slide.discipline
      slideCard.querySelector(".meta-chip:last-child").textContent = slide.level

      slideCard.style.opacity = "1"
      slideCard.style.transform = "translateY(0)"
    }, 300)
  }

  // Rotate spotlight every 8 seconds
  setInterval(rotateSpotlight, 8000)

  // Trial form submission
  const trialForm = document.getElementById("trial-form")
  if (trialForm) {
    trialForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(trialForm)
      const data = Object.fromEntries(formData)

      console.log("Trial lesson request:", data)

      // Show success message
      const submitButton = trialForm.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent
      submitButton.textContent = "Request Sent!"
      submitButton.style.background = "var(--color-accent)"

      setTimeout(() => {
        submitButton.textContent = originalText
        submitButton.style.background = ""
        trialForm.reset()
      }, 3000)
    })
  }

  // Parallax effect for hero visual
  const heroVisual = document.querySelector(".hero__visual")
  if (
    heroVisual &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * 0.3
      heroVisual.style.transform = \`translateY(\${rate}px)\`
    })
  }

  // Video parallax in Why Us section
  const whyUsVideo = document.querySelector(".media__video")
  if (
    whyUsVideo &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observerOptions = {
      threshold: 0.1,
    }

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          whyUsVideo.play()
        } else {
          whyUsVideo.pause()
        }
      })
    }, observerOptions)

    videoObserver.observe(whyUsVideo)
  }

  // Animate elements on scroll
  const observeElements = document.querySelectorAll(
    ".explore-card, .discipline-card, .content-card, .gallery__item"
  )
  if (
    observeElements.length > 0 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, index * 50)
            scrollObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observeElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      scrollObserver.observe(el)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <div className="photo-highlights-events-grid-container">
        <div className="events-grid-wrapper"></div>
      </div>
      <div className="photo-highlights-events-grid-container">
        <div className="events-grid-wrapper"></div>
      </div>
      <div className="photo-highlights-events-grid-container">
        <div className="events-grid-wrapper"></div>
      </div>
    </div>
  )
}

export default Home
