import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [activeNav, setActiveNav] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation(); // Добавляем useLocation

  // Проверяем состояние при загрузке страницы
  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      // Даем время на рендеринг страницы
      setTimeout(() => {
        scrollToSection('portfolio');
      }, 100);
      
      // Очищаем состояние
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
    }
  };

  const portfolioItems = [
    {
      id: 1,
      category: "Веб-дизайн",
      imageUrl: "../image/coverwebdesign.svg",
      path: "/webdesign"
    },
    {
      id: 2,
      category: "Брендинг", 
      imageUrl: "../image/coverbranding.svg",
      path: "/branding"
    },
    {
      id: 3,
      category: "Полиграфия",
      imageUrl: "../image/coverpoly.svg",
      path: "/polygraphy"
    },
    {
      id: 4,
      category: "Соц.сети",
      imageUrl: "../image/coversocials.svg",
      path: "/socials"
    }
  ];

  const handlePortfolioClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      {/* Навигация */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div 
            className={styles.logo}
            onClick={() => scrollToSection('hero')}
          >
            qwwsal
          </div>
          
          <div className={styles.navLinks}>
            {['about', 'portfolio', 'services', 'contacts'].map((item) => (
              <button
                key={item}
                className={`${styles.navLink} ${activeNav === item ? styles.active : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item === 'about' && 'Обо мне'}
                {item === 'portfolio' && 'Портфолио'}
                {item === 'services' && 'Услуги'}
                {item === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          
          <button 
            className={styles.contactBtn}
            onClick={() => scrollToSection('contacts')}
          >
            Обсудить проект
          </button>
        </div>
      </nav>

      {/* Герой */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Создаю дизайн,</span>
            <span className={styles.titleLine}>который решает</span>
            <span className={styles.titleLineAccent}>бизнес-задачи</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Веб-дизайн, UI/UX и брендинг с фокусом на результат
          </p>
          <button 
            className={styles.heroCta}
            onClick={() => scrollToSection('portfolio')}
          >
            Смотреть работы
          </button>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleNumber}>01</span>
            Обо мне
          </h2>
          
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder}>
                 <img 
            src="./image/photo.svg"
            className={styles.photoIcon}
          />
              </div>
            </div>
            
            <div className={styles.aboutText}>
              <h3 className={styles.aboutName}>Привет, я Алина</h3>
              <p className={styles.aboutDesc}>
                Профессиональный дизайнер с более чем 4-летним опытом. 
                Специализируюсь на создании цифровых продуктов, которые не только 
                выглядят стильно, но и приносят реальную прибыль бизнесу.
              </p>
              <p className={styles.aboutDesc}>
                Работаю с клиентами из разных сфер: от стартапов до крупных компаний. 
                Каждый проект — это возможность создать что-то уникальное и эффективное.
              </p>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>4+</div>
                  <div className={styles.statText}>года в дизайне</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statText}>реализованных проектов</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statText}>довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className={styles.features}>
        <div className={styles.sectionContainer}>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
          <img 
            src="./image/focus.svg"
            className={styles.featureSvg}
          />
        </div>
              <h3 className={styles.featureTitle}>Фокус на цели</h3>
              <p className={styles.featureText}>
                Каждый дизайн начинается с анализа бизнес-целей и потребностей пользователей
              </p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                 <img 
            src="./image/speed.svg"
            className={styles.featureSvg}
          />
              </div>
              <h3 className={styles.featureTitle}>Скорость и качество</h3>
              <p className={styles.featureText}>
                Быстрая реализация без компромиссов в качестве Соблюдаю все сроки
              </p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                 <img 
            src="./image/support.svg"
            className={styles.featureSvg}
          />
              </div>
              <h3 className={styles.featureTitle}>Постоянная поддержка</h3>
              <p className={styles.featureText}>
                Всегда на связи после завершения проекта для доработок и консультаций
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleNumber}>02</span>
            Портфолио
          </h2>
          
          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className={styles.portfolioItem}
                onClick={() => handlePortfolioClick(item.path)}
              >
                <div className={styles.portfolioImage}>
                  <img 
                    src={item.imageUrl}
                    alt={item.category}
                    className={styles.portfolioImg}
                  />
                  <div className={styles.portfolioOverlay}>
                    <span className={styles.viewProject}>Смотреть проекты →</span>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioCategory}>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.portfolioNote}>
            Больше работ в моем{' '}
            <a 
              href="https://www.behance.net/qwwsal" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              Behance
            </a>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleNumber}>03</span>
            Услуги и цены
          </h2>
                     <img 
            src="./image/pricelist.svg"
            className={styles.svgPrice}
          />
            
                <button 
                  className={styles.serviceBtn}
                  onClick={() => scrollToSection('contacts')}
                >
                  Заказать
                </button>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className={styles.contacts}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleNumber}>04</span>
            Контакты
          </h2>
          
          <div className={styles.contactsGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}> <img 
            src="./image/tg.svg"
            className={styles.contactIconImg}
          /></div>
              <h3 className={styles.contactTitle}>Telegram</h3>
              <p className={styles.contactSubtitle}>Для быстрой связи</p>
              <a 
                href="https://t.me/qwwsal" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @qwwsal
              </a>
              <p className={styles.contactDesc}>Отвечаю в течение часа</p>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}> <img 
            src="./image/be.svg"
            className={styles.contactIconImg}
          /></div>
              <h3 className={styles.contactTitle}>Behance</h3>
              <p className={styles.contactSubtitle}>Больше работ</p>
              <a 
                href="https://www.behance.net/qwwsal" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                behance.net/qwwsal
              </a>
              <p className={styles.contactDesc}>Полное портфолио</p>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}> <img 
            src="./image/in.svg"
            className={styles.contactIconImg}
          /></div>
              <h3 className={styles.contactTitle}>Instagram</h3>
              <p className={styles.contactSubtitle}>Жизнь и дизайн</p>
              <a 
                href="https://www.instagram.com/qwwsal" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @qwwsal
              </a>
              <p className={styles.contactDesc}>Процессы и закулисье</p>
            </div>
          </div>
          
          <div className={styles.contactCta}>
            <h3 className={styles.ctaTitle}>Готовы к сотрудничеству?</h3>
            <p className={styles.ctaText}>
              Напишите в Telegram — обсудим ваш проект и найдём лучшее решение
            </p>
            <a 
              href="https://t.me/qwwsal" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>qwwsal</div>
          <div className={styles.footerText}>
            Дизайн, который работает.
          </div>
          <div className={styles.footerNav}>
            <button 
              className={styles.footerLink}
              onClick={() => scrollToSection('portfolio')}
            >
              Портфолио
            </button>
            <button 
              className={styles.footerLink}
              onClick={() => scrollToSection('services')}
            >
              Услуги
            </button>
            <a 
              href="https://t.me/qwwsal" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Связаться
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;