import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contacts-and-registration.css'

const ContactsAndRegistration = (props) => {
  return (
    <div className="contacts-and-registration-container1">
      <Helmet>
        <title>Contacts-and-Registration - Musica</title>
        <meta
          property="og:title"
          content="Contacts-and-Registration - Musica"
        />
        <link
          rel="canonical"
          href="https://www.mikealina.ru/contacts-and-registration"
        />
      </Helmet>
      <Navigation></Navigation>
      <section id="contact-registration" className="contact-section">
        <div className="contact-container">
          <div className="contacts-and-registration-thq-contact-panel-elm contact-panel">
            <div className="visual-column">
              <div className="visual-backplate">
                <h2 className="hero-title visual-headline">Наши контакты</h2>
                <p className="visual-subtext"> Ваше творческое путешествие </p>
              </div>
            </div>
            <div className="content-column">
              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  <div className="detail-content">
                    <h3>Телефон</h3>
                    <p>+7 (916) 235-33-82</p>
                    <span className="detail-meta">
                      Рабочие дни 9:00–20:00,  Выходные  10:00–16:00
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h3>Email</h3>
                    <p>soundaround.club@yandex.ru</p>
                  </div>
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=89162353381&amp;text&amp;type=phone_number&amp;app_absent=0"
                id="trialToggleBtn"
                aria-controls="registrationForm"
                aria-expanded="false"
                target="_blank"
                rel="noreferrer noopener"
                className="contacts-and-registration-thq-btn-elm1 contacts-and-registration-trial-cta btn btn-xl btn-primary"
              >
                <span>Запишитесь на пробный урок</span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="contacts-and-registration-thq-cta-arrow-elm"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <div
                id="registrationForm"
                aria-hidden="true"
                className="registration-form-wrapper"
              >
                <form
                  role="form"
                  aria-labelledby="formHeading"
                  data-form-id="fa790112-516c-4ddd-bb0e-df7e0c55d4b7"
                  className="registration-form"
                >
                  <h3 id="formHeading" className="form-heading">
                    {' '}
                    Begin Your Creative Journey
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required="true"
                        aria-required="true"
                        data-form-field-id="fullName"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="age">Age Group *</label>
                      <select
                        id="age"
                        name="age"
                        required="true"
                        aria-required="true"
                        data-form-field-id="age"
                      >
                        <option value="true">Select age group</option>
                        <option value="6-12">6-12 years</option>
                        <option value="13-17">13-17 years</option>
                        <option value="18-25">18-25 years</option>
                        <option value="26-40">26-40 years</option>
                        <option value="41+">41+ years</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="discipline">Preferred Discipline *</label>
                      <select
                        id="discipline"
                        name="discipline"
                        required="true"
                        aria-required="true"
                        data-form-field-id="discipline"
                      >
                        <option value="true">Choose discipline</option>
                        <option value="vocals">Vocals</option>
                        <option value="guitar">Guitar</option>
                        <option value="piano">Piano</option>
                        <option value="acting">Acting</option>
                        <option value="songwriting">Songwriting</option>
                        <option value="production">Production</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="skillLevel">Skill Level *</label>
                      <select
                        id="skillLevel"
                        name="skillLevel"
                        required="true"
                        aria-required="true"
                        data-form-field-id="skillLevel"
                      >
                        <option value="true">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredDays">
                        Preferred Days &amp; Times *
                      </label>
                      <select
                        id="preferredDays"
                        name="preferredDays"
                        required="true"
                        aria-required="true"
                        data-form-field-id="preferredDays"
                      >
                        <option value="true">Choose schedule</option>
                        <option value="weekdays-morning">
                          Weekdays - Morning
                        </option>
                        <option value="weekdays-afternoon">
                          {' '}
                          Weekdays - Afternoon
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </option>
                        <option value="weekdays-evening">
                          Weekdays - Evening
                        </option>
                        <option value="weekend-morning">
                          Weekend - Morning
                        </option>
                        <option value="weekend-afternoon">
                          Weekend - Afternoon
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Contact Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required="true"
                        aria-required="true"
                        data-form-field-id="phone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required="true"
                        aria-required="true"
                        data-form-field-id="email"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="hearAbout">
                        How did you hear about us?
                      </label>
                      <input
                        type="text"
                        id="hearAbout"
                        name="hearAbout"
                        placeholder="Optional"
                        data-form-field-id="hearAbout"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="accessibility">
                        {' '}
                        Any accessibility or learning needs?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                      <textarea
                        id="accessibility"
                        name="accessibility"
                        rows="3"
                        placeholder="Optional"
                        data-form-field-id="accessibility"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required="true"
                      aria-required="true"
                      data-form-field-id="consent"
                    />
                    <label htmlFor="consent">
                      {' '}
                      I agree to data processing and communication
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </label>
                  </div>
                  <button
                    id="thq_button_7_JW"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_7_JW"
                    className="btn-lg btn btn-primary"
                  >
                    {' '}
                    Submit Registration
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <div
                    id="formSuccess"
                    aria-live="polite"
                    className="contacts-and-registration-thq-form-success-elm form-success"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                    <p>
                      {' '}
                      Thank you! Your trial lesson request has been received.
                      We&apos;ll contact you within 24 hours.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </form>
              </div>
              <div className="quick-links">
                <h4>Быстрые ссылки</h4>
                <div className="link-grid">
                  <a href="#schedule">
                    <div className="quick-link-item">
                      <span>Расписание(в разработке) </span>
                    </div>
                  </a>
                  <a href="#teachers">
                    <div className="quick-link-item">
                      <span>Преводаватели</span>
                    </div>
                  </a>
                  <a href="#events">
                    <div className="quick-link-item">
                      <span>События </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="location-map" className="location-section">
        <div className="location-container">
          <div className="location-panel">
            <div className="map-column">
              <div className="map-wrapper">
                <div className="map-fallback">
                  <img
                    alt="Creative Harmony Studio Location Map"
                    src="https://images.pexels.com/photos/7097831/pexels-photo-7097831.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  />
                </div>
                <div className="contacts-and-registration-thq-map-controls-elm map-controls"></div>
              </div>
            </div>
            <div className="content-rail">
              <div className="location-card">
                <div className="card-icon">
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
                      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                      <circle r="3" cx="10" cy="10"></circle>
                    </g>
                  </svg>
                </div>
                <div className="card-body">
                  <h3>Адрес Студии</h3>
                  <p>улица Мнёвники, 7к1, Москва, 123308</p>
                </div>
              </div>
              <div className="location-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="card-body">
                  <h3>Как добраться?</h3>
                  <p>
                    <span className="contacts-and-registration-text34">
                      На метро:
                    </span>
                    <span> в 6 минутах от станции Народное Ополчение</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <p>
                    <span className="contacts-and-registration-text38">
                      Парковка
                    </span>
                    <span className="contacts-and-registration-text39">:</span>
                    <span>
                        Бесплатные парковочные места на территории двора;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <a
                href="https://yandex.ru/maps/-/CLsyNKyT"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener"
                  target="_blank"
                  className="btn-lg directions-btn btn btn-primary"
                >
                  <span>Построить маршрут </span>
                  <svg
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
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
      </section>
      <section id="social-messenger" className="social-section">
        <div className="social-container">
          <div className="social-grid">
            <div className="social-column">
              <div className="column-header">
                <h2 className="section-title">
                  Присоединяйтесь к нашему сообществу
                </h2>
                <p className="section-content">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    Следите за нами, смотрите живые моменты, пишите нам:)
                  </span>
                  Follow our visual journey, catch live moments, and reach us
                  instantly
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="badge-strip">
                <a
                  href="https://vk.com/studiozv"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Follow on VK"
                    className="contacts-and-registration-thq-social-badge-elm1 vk-badge social-badge"
                  >
                    <div className="badge-icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="badge-content">
                      <h3>VK</h3>
                    </div>
                  </div>
                </a>
                <a
                  href="https://t.me/ZV_musicstudio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Subscribe on Telegram"
                    className="contacts-and-registration-thq-social-badge-elm2 telegram-badge social-badge"
                  >
                    <div className="badge-icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="badge-content">
                      <h3>Telegram</h3>
                    </div>
                  </div>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=79162353381&amp;text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5+%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5&amp;type=phone_number&amp;app_absent=0"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    aria-label="Follow on Instagram"
                    className="contacts-and-registration-thq-social-badge-elm3 instagram-badge social-badge"
                  >
                    <div className="badge-icon">
                      <svg
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
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
                    <div className="badge-content">
                      <h3>WhatsApp</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="bb7fc243-f1b1-4124-95c6-e9ae9ae0a2fe"
              Image="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7bc2cd49-3948-4b70-af56-81707acc5f5f/bb7fc243-f1b1-4124-95c6-e9ae9ae0a2fe?org_if_sml=1&amp;force_format=original"
              className="messenger-column"
            >
              <div className="responsive-image-container">
                <img
                  id="responsiveImage"
                  alt="Creative abstract artistic background - placeholder image"
                  src="https://images.pexels.com/photos/35051394/pexels-photo-35051394.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="responsive-cover-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="floating-row">
          <a href="https://wa.me/15553248790">
            <div aria-label="WhatsApp" className="whatsapp-float floating-btn">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </a>
          <a href="https://t.me/creativeharmony">
            <div aria-label="Telegram" className="telegram-float floating-btn">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
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
      </section>
      <section id="trial-registration" className="trial-section">
        <div className="trial-container">
          <div className="trial-panel">
            <div className="artboard-panel">
              <video
                src="https://videos.pexels.com/video-files/3796265/3796265-hd_1080_2048_25fps.mp4"
                loop="true"
                muted="true"
                poster="/события/%D0%B0%D0%B9-1500w.png"
                autoPlay="true"
                playsInline="true"
                className="artboard-video"
              ></video>
              <div className="artboard-overlay">
                <h2 className="hero-title">выбри</h2>
                <p className="section-content">
                  <span>Закажи урок </span>
                  <br></br>
                  Book a complimentary trial lesson — expressive, expert-led,
                  and tailored to your voice or instrument
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="form-panel">
              <div id="trialAccordion" className="accordion-form">
                <div className="accordion-item">
                  <button
                    id="step1Btn"
                    aria-controls="step1Panel"
                    aria-expanded="true"
                    className="accordion-button active"
                  >
                    <span className="contacts-and-registration-thq-step-number-elm1">
                      1
                    </span>
                    <span className="contacts-and-registration-thq-step-title-elm1">
                      Информация
                    </span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contacts-and-registration-thq-accordion-icon-elm1"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="step1Panel"
                    role="region"
                    aria-labelledby="step1Btn"
                    className="accordion-panel"
                  >
                    <div className="form-group">
                      <label htmlFor="studentName">ФИО*</label>
                      <input type="text" id="studentName" required="true" />
                    </div>
                    <div className="contacts-and-registration-thq-form-group-elm20 form-group"></div>
                    <div className="form-group">
                      <label htmlFor="studentContact">Контактный телефон</label>
                      <input type="tel" id="studentContact" required="true" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="studentEmail">Email *</label>
                      <input type="email" id="studentEmail" required="true" />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    id="step2Btn"
                    aria-controls="step2Panel"
                    aria-expanded="false"
                    className="accordion-button"
                  >
                    <span className="contacts-and-registration-thq-step-number-elm2">
                      2
                    </span>
                    <span className="contacts-and-registration-thq-step-title-elm2">
                      Направление 
                    </span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contacts-and-registration-thq-accordion-icon-elm2"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="step2Panel"
                    role="region"
                    aria-labelledby="step2Btn"
                    className="accordion-panel"
                  >
                    <div className="form-group">
                      <label htmlFor="trialDiscipline">
                        {' '}
                        Which lesson would you like to try? *
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                      <select id="trialDiscipline" required="true">
                        <option value="true">Choose discipline</option>
                        <option value="vocals">Vocals</option>
                        <option value="guitar">Guitar</option>
                        <option value="piano">Piano</option>
                        <option value="acting">Acting</option>
                        <option value="songwriting">Songwriting</option>
                        <option value="production">Production</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="trialLevel">Skill Level *</label>
                      <select id="trialLevel" required="true">
                        <option value="true">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="professional">
                          Professional Refresher
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="preferredTeacher">
                        {' '}
                        Preferred Teacher (Optional)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                      <input
                        type="text"
                        id="preferredTeacher"
                        placeholder="Leave blank for best match"
                      />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    id="step3Btn"
                    aria-controls="step3Panel"
                    aria-expanded="false"
                    className="accordion-button"
                  >
                    <span className="contacts-and-registration-thq-step-number-elm3">
                      3
                    </span>
                    <span className="contacts-and-registration-thq-step-title-elm3">
                      Уровень знаний 
                    </span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contacts-and-registration-thq-accordion-icon-elm3"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="step3Panel"
                    role="region"
                    aria-labelledby="step3Btn"
                    className="accordion-panel"
                  >
                    <div className="form-group">
                      <label htmlFor="trialDays">
                        Preferred Days &amp; Times *
                      </label>
                      <select id="trialDays" required="true">
                        <option value="true">Choose schedule</option>
                        <option value="weekdays-morning">
                          Weekdays - Morning
                        </option>
                        <option value="weekdays-afternoon">
                          {' '}
                          Weekdays - Afternoon
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </option>
                        <option value="weekdays-evening">
                          Weekdays - Evening
                        </option>
                        <option value="weekend-morning">
                          Weekend - Morning
                        </option>
                        <option value="weekend-afternoon">
                          Weekend - Afternoon
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="trialFormat">Trial Format *</label>
                      <select id="trialFormat" required="true">
                        <option value="true">Select format</option>
                        <option value="in-studio">In-Studio</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="hearSource">
                        {' '}
                        How did you hear about Creative Harmony?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                      <select id="hearSource">
                        <option value="true">Optional</option>
                        <option value="referral">Referral</option>
                        <option value="social">Social Media</option>
                        <option value="search">Search Engine</option>
                        <option value="event">Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    id="step4Btn"
                    aria-controls="step4Panel"
                    aria-expanded="false"
                    className="accordion-button"
                  >
                    <span className="contacts-and-registration-thq-step-number-elm4">
                      4
                    </span>
                    <span className="contacts-and-registration-thq-step-title-elm4">
                      Комментарии
                    </span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="contacts-and-registration-thq-accordion-icon-elm4"
                    >
                      <path
                        d="m18 15l-6-6l-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="step4Panel"
                    role="region"
                    aria-labelledby="step4Btn"
                    className="accordion-panel"
                  >
                    <div className="form-group">
                      <label htmlFor="studentNotes">
                        Anything we should know?
                      </label>
                      <textarea
                        id="studentNotes"
                        rows="4"
                        placeholder="Goals, allergies, accessibility needs, instruments owned..."
                      ></textarea>
                    </div>
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="trialConsent1"
                        required="true"
                      />
                      <label htmlFor="trialConsent1">
                        {' '}
                        I agree to receive booking confirmations and trial
                        reminders
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                    </div>
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="trialConsent2"
                        required="true"
                      />
                      <label htmlFor="trialConsent2">
                        {' '}
                        I have read and accept the trial lesson terms and
                        privacy policy
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn trial-submit-btn btn-xl btn-primary"
                    >
                      {' '}
                      Sign Up for Trial Lesson
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contacts-and-registration-container2">
        <div className="contacts-and-registration-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.visual-column, .artboard-video {
  transform: none !important;
}
}
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: var(--animation-duration-standard);
  transition-timing-function: var(--animation-curve-primary);
}
button, a, input, select, textarea {
  transition-property: background-color, border-color, color, transform,
      box-shadow;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="contacts-and-registration-container4">
        <div className="contacts-and-registration-container5">
          <Script
            html={`<script defer data-name="contacts-registration">
(function(){
  // Section 1: Contact & Registration - Form Toggle
  const trialToggleBtn = document.getElementById("trialToggleBtn")
  const registrationForm = document.getElementById("registrationForm")

  if (trialToggleBtn && registrationForm) {
    trialToggleBtn.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      this.setAttribute("aria-expanded", !isExpanded)
      registrationForm.setAttribute("aria-hidden", isExpanded)
    })
  }

  // Registration Form Submission
  const contactForm = document.querySelector(".registration-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const successMsg = document.getElementById("formSuccess")
      if (successMsg) {
        successMsg.style.display = "flex"
        this.reset()
        setTimeout(() => {
          successMsg.style.display = "none"
        }, 5000)
      }
    })
  }

  // Section 2: Location & Map - Transport Toggle
  const transportToggles = document.querySelectorAll(".transport-toggle")
  transportToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      transportToggles.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Section 4: Trial Registration - Accordion
  const accordionButtons = document.querySelectorAll(".accordion-button")
  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"

      // Close all other accordions
      accordionButtons.forEach((btn) => {
        btn.setAttribute("aria-expanded", "false")
        btn.classList.remove("active")
      })

      // Toggle current
      if (!isExpanded) {
        this.setAttribute("aria-expanded", "true")
        this.classList.add("active")
      }
    })
  })

  // Open first accordion by default
  if (accordionButtons.length > 0) {
    accordionButtons[0].setAttribute("aria-expanded", "true")
    accordionButtons[0].classList.add("active")
  }

  // Section 6: FAQ Accordion
  const faqButtons = document.querySelectorAll(".faq-button")
  faqButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"

      // Toggle current
      this.setAttribute("aria-expanded", !isExpanded)
    })
  })

  // Parallax Effect for Visual Column (subtle)
  const visualColumn = document.querySelector(".visual-column")
  if (visualColumn) {
    let ticking = false

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const scrolled = window.pageYOffset
          const rate = scrolled * 0.1
          if (
            visualColumn &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) {
            visualColumn.style.transform = \`translateY(\${rate}px)\`
          }
          ticking = false
        })
        ticking = true
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ContactsAndRegistration
