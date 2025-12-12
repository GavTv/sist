import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './disciplines-classes.css'

const DisciplinesClasses = (props) => {
  return (
    <div className="disciplines-classes-container10">
      <Helmet>
        <title>Disciplines-Classes - Musica</title>
        <meta property="og:title" content="Disciplines-Classes - Musica" />
        <link
          rel="canonical"
          href="https://www.mikealina.ru/disciplines-classes"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="disciplines-classes-container11">
        <div className="disciplines-classes-container12">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.about-headline, .portrait {
  animation: none;
  opacity: 1;
  transform: none;
}
.slide {
  transition: none;
}
}
@media (prefers-reduced-motion: reduce) {
.class-card {
  animation-duration: 0s;
  transition: none;
}
.filter-btn {
  transition: none;
}
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
:focus-visible {
  outline: 3px solid var(--color-outline);
  outline-offset: 3px;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="hero"
        role="banner"
        aria-label="Disciplines and Classes Hero"
        className="disciplines---classes-hero-section disciplines-classes-thq-hero-section-elm"
      >
        <div className="disciplines---classes-hero-container disciplines-classes-thq-hero-container-elm">
          <div className="disciplines-classes-thq-hero-visual-stack-elm hero-visual-stack">
            <div className="hero-thumbnail hero-thumbnail-1">
              <img
                alt="Teacher guiding children in music class around a piano"
                src="https://images.pexels.com/photos/8363149/pexels-photo-8363149.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
              />
            </div>
            <div className="hero-thumbnail hero-thumbnail-2">
              <img
                alt="Group of young musicians practicing in a modern studio"
                src="https://images.pexels.com/photos/7802603/pexels-photo-7802603.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
              />
            </div>
            <div className="hero-thumbnail hero-thumbnail-3">
              <img
                alt="Three musicians perform with piano, guitar, and drums"
                src="https://images.pexels.com/photos/8040887/pexels-photo-8040887.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
              />
            </div>
          </div>
          <div className="hero-content-card disciplines-classes-thq-hero-content-card-elm">
            <div className="disciplines---classes-hero-badge">
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
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                  <circle r="2" cx="4" cy="20"></circle>
                </g>
              </svg>
              <span>Creative Excellence</span>
            </div>
            <h1 className="hero-title disciplines---classes-hero-title">
              Наши Дисциплины
            </h1>
            <p className="disciplines---classes-hero-description">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              Creative Harmony&apos;s Disciplines blend rigorous technique with
              expressive freedom. From vocals and guitar to piano, acting, and
              production — each class cultivates both skill and soul.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-disciplines-chips">
              <span className="discipline-chip">Вокал</span>
              <span className="discipline-chip">Гитара</span>
              <span className="discipline-chip">Фортепиано </span>
              <span className="discipline-chip">Актерское мастерство </span>
              <span className="discipline-chip">Написание песен</span>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=89162353381&amp;text&amp;type=phone_number&amp;app_absent=0"
              aria-label="Sign up for a trial lesson"
              aria-describedby="trial-details"
              target="_blank"
              rel="noreferrer noopener"
              className="disciplines-classes-thq-btn-elm btn disciplines---classes-hero-cta btn-primary"
            >
              {' '}
              Пробный Урок
            </a>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        role="region"
        aria-labelledby="pricing-heading"
        className="pricing-section"
      >
        <div className="pricing-header-section disciplines-classes-thq-pricing-header-section-elm">
          <div className="pricing-header-content">
            <div className="pricing-header-icon-wrapper">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
                className="pricing-header-icon"
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
            <h2 className="pricing-header-title section-title">
              Стоимость занятий
            </h2>
            <p className="section-content pricing-header-subtitle">
              {' '}
              Доступные цены на все направления
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="pricing-header-decorative">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="pricing-decorative-star"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="pricing-decorative-line"></div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="pricing-decorative-star"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="disciplines-classes-container13">
              <div className="disciplines-classes-container14">
                <Script
                  html={`<style>
@media (prefers-reduced-motion: reduce) {
.pricing-header-icon-wrapper::before, .pricing-decorative-star {
  animation: none;
}
}
</style>`}
                ></Script>
              </div>
            </div>
            <div className="disciplines-classes-container15">
              <div className="disciplines-classes-container16">
                <Script
                  html={`<style>
        @keyframes pulseGlow {0%,100% {transform: scale(1);
opacity: 0.2;}
50% {transform: scale(1.1);
opacity: 0.4;}}@keyframes starTwinkle {0%,100% {opacity: 0.6;
transform: scale(1);}
50% {opacity: 1;
transform: scale(1.2);}}
        </style> `}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div role="link" className="disciplines---classes-price-card">
          <section className="disciplines---classes-disciplines---classes-pricing-section">
            <div className="disciplines---classes-disciplines---classes-pricing-container">
              <div className="disciplines---classes-disciplines---classes-pricing-grid">
                <article className="disciplines---classes-pricing-card">
                  <div className="pricing-card-header">
                    <div className="pricing-duration-badge">
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
                          <path d="M12 6v6l4 2"></path>
                          <circle r="10" cx="12" cy="12"></circle>
                        </g>
                      </svg>
                      <span>1 месяц</span>
                    </div>
                  </div>
                  <div className="pricing-card-body">
                    <div className="pricing-row">
                      <span className="pricing-amount">3.200 руб</span>
                      <span className="pricing-label">Дети</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-amount">3.500 руб</span>
                      <span className="pricing-label">Взрослые</span>
                    </div>
                    <p className="pricing-description">
                      <span>Pанятия с опытными преподавателями по всем</span>
                      <br></br>
                      <span>
                        {' '}
                        дисциплинам студии
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="pricing-card-footer">
                    <div className="pricing-tag pricing-tag-popular">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Популярное</span>
                    </div>
                  </div>
                </article>
                <article className="disciplines---classes-pricing-card">
                  <div className="pricing-card-header">
                    <div className="pricing-duration-badge">
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
                          <path d="M12 6v6l4 2"></path>
                          <circle r="10" cx="12" cy="12"></circle>
                        </g>
                      </svg>
                      <span>
                        <span>1 месяца</span>
                        <br></br>
                        <span>4 занятия</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-card-body">
                    <div className="pricing-row">
                      <span className="pricing-amount">7.700 руб</span>
                      <span className="pricing-label">Дети</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-amount">8.7000 руб</span>
                      <span className="pricing-label">Взрослые</span>
                    </div>
                    <p className="pricing-description">
                      <span>
                        Месячный абонемент с четырьмя занятиями. Идеально для
                      </span>
                      <br></br>
                      <span>
                        {' '}
                        освоения базовых навыков
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="pricing-card-footer">
                    <div className="pricing-tag pricing-tag-save">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
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
                      <span>Экономно</span>
                    </div>
                  </div>
                </article>
                <article className="pricing-card-featured disciplines---classes-pricing-card">
                  <div className="pricing-featured-badge">
                    <span>Лучший выбор</span>
                  </div>
                  <div className="pricing-card-header">
                    <div className="pricing-duration-badge">
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
                          <path d="M12 6v6l4 2"></path>
                          <circle r="10" cx="12" cy="12"></circle>
                        </g>
                      </svg>
                      <span>
                        <span>1 месяц</span>
                        <br></br>
                        <span>8 занятий</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-card-body">
                    <div className="pricing-row">
                      <span className="pricing-amount">14.600 руб</span>
                      <span className="pricing-label">Дети</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-amount">16.200 руб</span>
                      <span className="pricing-label">Взрослые</span>
                    </div>
                    <p className="pricing-description">
                      {' '}
                      Максимальная выгода! Полгода обучения со скидкой 10%.
                      Достигайте целей быстрее
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="pricing-card-footer">
                    <div className="pricing-tag-best pricing-tag">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                        </g>
                      </svg>
                      <span>Лучший выбор</span>
                    </div>
                    <div className="pricing-tag-discount pricing-tag">
                      <span>Скидка 10%</span>
                    </div>
                  </div>
                </article>
                <article className="disciplines---classes-pricing-card">
                  <div className="pricing-card-header">
                    <div className="pricing-duration-badge">
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
                          <path d="M12 6v6l4 2"></path>
                          <circle r="10" cx="12" cy="12"></circle>
                        </g>
                      </svg>
                      <span>
                        <span>3 месяца</span>
                        <br></br>
                        <span>24 занятия </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-card-body">
                    <div className="pricing-row">
                      <span className="pricing-amount">38.000 руб</span>
                      <span className="pricing-label">Дети</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-amount">43.500 руб</span>
                      <span className="pricing-label">Взрослые</span>
                    </div>
                    <p className="pricing-description">
                      {' '}
                      Годовой абонемент со скидкой 15%. Полное погружение в
                      творческую атмосферу
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                  <div className="pricing-card-footer">
                    <div className="pricing-tag pricing-tag-premium">
                      <svg
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                        </g>
                      </svg>
                      <span>Максимум экономии</span>
                    </div>
                    <div className="pricing-tag-discount pricing-tag">
                      <span>Скидка 15%</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        id="updates"
        role="region"
        aria-label="Latest updates and events"
        className="disciplines-classes-thq-updates-section-elm updates-section"
      >
        <div className="disciplines-classes-thq-updates-container-elm updates-container">
          <div className="updates-hero">
            <video
              src="https://videos.pexels.com/video-files/5648482/5648482-hd_1366_720_50fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/5648482/pictures/preview-0.jpg"
              autoPlay="true"
              aria-label="Creative Harmony studio rehearsal"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay">
              <h2 className="hero-updates-title">Живи с нами с командой! </h2>
              <p className="hero-updates-subtitle">
                {' '}
                Ежемесячные концерты, показательные выступления;
              </p>
            </div>
          </div>
          <div className="disciplines-classes-thq-updates-split-elm updates-split">
            <div className="updates-feed">
              <article className="update-card">
                <div className="update-thumbnail">
                  <img
                    alt="Lively jazz band performing with a singer"
                    src="https://images.pexels.com/photos/9419244/pexels-photo-9419244.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="update-content">
                  <span className="update-tag">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle
                          r=".5"
                          cx="7.5"
                          cy="7.5"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Studio Concert
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <h3 className="update-title">Весна 2025</h3>
                  <p className="update-description">
                    {' '}
                    Оригинальные выступления студентов и преподавателей.
                    Авторская программа по вокалу, гитаре, фортепиано и
                    актерскому мастерству.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="update-meta">
                    <span className="update-date"> Март 20, 2026</span>
                  </div>
                </div>
              </article>
              <article className="update-card">
                <div className="update-thumbnail">
                  <img
                    alt="Man playing guitar in a contemporary indoor amphitheater"
                    src="https://images.pexels.com/photos/8568329/pexels-photo-8568329.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="update-content">
                  <span className="update-tag">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle
                          r=".5"
                          cx="7.5"
                          cy="7.5"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Masterclass
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <h3 className="update-title"> Гости с проф басс гитарой </h3>
                  <p className="update-description">
                    {' '}
                    Семинар для ограниченного числа участников с признанным
                    профессионалом. Прямое наставничество и обратная связь по
                    репертуару.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="update-meta">
                    <span className="update-date">Январь  29, 2026</span>
                  </div>
                </div>
              </article>
              <article className="update-card">
                <div className="update-thumbnail">
                  <img
                    alt="Diverse indie band performs energetically on a rooftop"
                    src="https://images.pexels.com/photos/7502184/pexels-photo-7502184.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="update-content">
                  <span className="update-tag">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle
                          r=".5"
                          cx="7.5"
                          cy="7.5"
                          fill="currentColor"
                        ></circle>
                      </g>
                    </svg>
                    <span>
                      {' '}
                      Open Mic
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <h3 className="update-title">Ночное выступление </h3>
                  <p className="update-description">
                    {' '}
                    Попробуйте новый материал, организацию тестов или идеи
                    проведения мастер-классов в присутствии коллег.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div className="update-meta">
                    <span className="update-date">Скоро !</span>
                  </div>
                </div>
              </article>
            </div>
            <aside className="updates-timeline">
              <div className="timeline-card">
                <h4 className="timeline-title">Предстоящие события </h4>
                <ul className="timeline-list">
                  <li className="timeline-item">
                    <span className="timeline-date">Янв. 20</span>
                    <span className="timeline-event">Вокал</span>
                  </li>
                  <li className="timeline-item">
                    <span className="timeline-date">Янв. 29</span>
                    <span className="timeline-event">Гитара </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="disciplines-classes-container17">
        <div className="disciplines-classes-container18">
          <Script
            html={`<style>
        @keyframes revealHero {to {opacity: 1;
transform: translateY(0);}}@keyframes reveal {to {opacity: 1;
transform: translateY(0) scale(1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="disciplines-classes-container19">
        <div className="disciplines-classes-container20">
          <Script
            html={`<script defer data-name="disciplines-classes">
(function(){
  // Hero parallax effect
  const heroVisualStack = document.querySelector(".hero-visual-stack")
  if (heroVisualStack) {
    let ticking = false

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const rate = scrolled * 0.05

          if (heroVisualStack && scrolled < window.innerHeight) {
            heroVisualStack.style.transform = \`translateY(\${rate}px)\`
          }

          ticking = false
        })

        ticking = true
      }
    })
  }

  // Gallery tabs filtering
  const tabButtons = document.querySelectorAll(".tab-btn")
  const galleryCards = document.querySelectorAll(".gallery-card")

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      tabButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      galleryCards.forEach((card) => {
        const discipline = card.getAttribute("data-discipline")

        if (filter === "all" || discipline === filter) {
          card.style.opacity = "1"
          card.style.transform = "scale(1)"
          card.style.display = "block"
        } else {
          card.style.opacity = "0"
          card.style.transform = "scale(0.95)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Schedule filters
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isPressed = btn.getAttribute("aria-pressed") === "true"
      btn.setAttribute("aria-pressed", !isPressed)
    })
  })

  // Featured carousel auto-advance
  const featuredSlides = document.querySelectorAll(".featured-slide")
  let currentSlide = 0

  function advanceSlide() {
    if (featuredSlides.length > 1) {
      featuredSlides[currentSlide].classList.remove("active")
      currentSlide = (currentSlide + 1) % featuredSlides.length
      featuredSlides[currentSlide].classList.add("active")
    }
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  if (!prefersReducedMotion && featuredSlides.length > 1) {
    setInterval(advanceSlide, 5000)
  }

  // Carousel controls
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      featuredSlides[currentSlide].classList.remove("active")
      currentSlide =
        (currentSlide - 1 + featuredSlides.length) % featuredSlides.length
      featuredSlides[currentSlide].classList.add("active")
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      featuredSlides[currentSlide].classList.remove("active")
      currentSlide = (currentSlide + 1) % featuredSlides.length
      featuredSlides[currentSlide].classList.add("active")
    })
  }

  // Video performance optimization
  const videos = document.querySelectorAll("video")
  videos.forEach((video) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
  })

  // Smooth reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const fadeElements = document.querySelectorAll(
    ".gallery-card, .update-card, .class-card"
  )
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  fadeElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    fadeObserver.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <div className="disciplines-classes-container21">
        <div className="disciplines-classes-container22">
          <Script
            html={`<script defer data-name="gallery-slider">
(function(){
  let currentSlide = 0
  const slides = document.querySelectorAll(".slide")
  const totalSlides = slides.length
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const counter = document.getElementById("slideCounter")

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active")
      if (index === currentSlide) {
        slide.classList.add("active")
      }
    })

    counter.querySelector(".counter-text").textContent = \`\${
      currentSlide + 1
    }/\${totalSlides}\`
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    updateSlider()
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateSlider()
  }

  prevBtn.addEventListener("click", prevSlide)
  nextBtn.addEventListener("click", nextSlide)

  let touchStartX = 0
  let touchEndX = 0

  const sliderWrapper = document.querySelector(".slider-wrapper")

  sliderWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  sliderWrapper.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide()
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide()
    }
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <a href="#" tabindex="0" aria-haspopup="true">
          <div className="link">
            <div
              role="link"
              className="disciplines-classes-thq-price-card-elm2 disciplines---classes-price-card"
            ></div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default DisciplinesClasses
