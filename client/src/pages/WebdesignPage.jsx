import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WebdesignPage.module.css';

const WebdesignPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Добавляем обработчик скролла
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToPortfolio = () => {
    navigate('/', { state: { scrollToPortfolio: true } });
  };

  return (
    <div className={styles.container}>
      {/* Кнопка назад с двумя состояниями */}
      <button 
        className={`${styles.backButton} ${isScrolled ? styles.compact : ''}`}
        onClick={handleBackToPortfolio}
        aria-label="Назад к портфолио"
      >
        {isScrolled ? (
          <span className={styles.arrowIcon}>←</span>
        ) : (
          <>
            <span className={styles.arrowIcon}>←</span>
            Назад к портфолио
          </>
        )}
      </button>
      
      <section id="services" className={styles.services}>
              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.titleNumber}>01</span>
                  Веб-дизайн для пекарни Bagel` Bakery</h2><br></br>
                  <p className={styles.sectionText}>
Задача: Создать современный, теплый и удобный сайт для пекарни, который визуально отражал бы ее философию и обновленный бренд.
<br></br><br></br>
Решение: Разработка адаптивного веб-сайта с уютной визуальной эстетикой, ориентированной на передачу атмосферы свежей выпечки и комфорта.
                </p>
                <p className={styles.sectionDescription}>Главная страница</p>
                           <img 
                  src="/image/FirstPage.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница меню</p>
                <img 
                  src="/image/MenuPage.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Корзина</p>
                <img 
                  src="/image/CartPage.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница с информацией</p>
                <img 
                  src="/image/InfoPage.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница контактов</p>
                <img 
                  src="/image/ContactPage.svg"
                  className={styles.svgPrice}
                />
              </div>



              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.titleNumber}>02</span>
                  Веб-дизайн "ClearVision" для ПК/мобильных устройств</h2><br></br>
                  <p className={styles.sectionText}>
Задача: Разработать адаптивный дизайн сайта для сети оптик, который упростит выбор и заказ очков и линз, обеспечив пользователям комфорт на всех типах устройств.
<br></br><br></br>
Решение: Создание чистого, функционального и максимально удобного интерфейса, который фокусирует внимание на продукте и поэтапно ведет клиента от выбора до заказа.
                </p>
                <p className={styles.sectionDescription}>Главная страница</p>
                           <img 
                  src="/image/MainPageCV.png"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница адресов</p>
                <img 
                  src="/image/AdressesPageCV.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница услуг</p>
                <img 
                  src="/image/ServicesPageCV.png"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница линз</p>
                <img 
                  src="/image/LensesPageCV.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Страница очков</p>
                <img 
                  src="/image/FramesPageCV.svg"
                  className={styles.svgPrice}
                />
              </div>
            </section>
      
      {/* Секция контакта */}
      <div className={styles.contactSection}>
        <h3>Заинтересованы в веб-дизайне?</h3>
        <p>
          Обсудим ваш проект, проанализируем цели и создадим дизайн, 
          который будет не только красивым, но и эффективным для бизнеса.
        </p>
        <a 
          href="https://t.me/qwwsal" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.contactButton}
        >
          Обсудить проект в Telegram
        </a>
      </div>
      
      {/* Футер */}
      <footer className={styles.pageFooter}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>qwwsal</div>
          <div className={styles.footerText}>
            Веб-дизайн с фокусом на результат
          </div>
          <div className={styles.footerNav}>
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className={styles.footerLink}
            >
              На главную
            </a>
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

export default WebdesignPage;