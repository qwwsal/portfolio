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
                  Разработка меню в морском стиле</h2><br></br>
                  <p className={styles.sectionText}>

Задача: Создать дизайн меню для кафе у моря, который передаёт лёгкую, воздушную атмосферу побережья через минималистичный визуальный язык, подчеркивая свежесть, простоту и расслабленное настроение.
<br></br><br></br>
Решение: Лаконичное и стильное меню, в котором морская тема раскрывается не буквально, а через ассоциации — сдержанные цвета, природные текстуры и лёгкие графические акценты.
                </p>
                <p className={styles.sectionDescription}></p>
                           <img 
                  src="/image/polymenu.svg"
                  className={styles.svgPrice}
                />
              </div>


<div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.titleNumber}>02</span>
                  Визитка для домашней пекарни Елены Сладковой</h2><br></br>
                  <p className={styles.sectionText}>
Задача: Создать визитку, которая станет «сладким приглашением» в мир кондитерского мастерства Елены Сладовой. Она должна не только передавать контакты, но и визуально вызывать аппетит, доверие и желание заказать десерт.
<br></br><br></br>
Решение: Компактный, но выразительный дизайн, сочетающий профессиональную информацию с «вкусной» эстетикой, который запомнится и вызовет положительные эмоции.
                </p>
                <p className={styles.sectionDescription}></p>
                           <img 
                  src="/image/polycard.svg"
                  className={styles.svgPrice}
                />
              </div>


              <div className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.titleNumber}>03</span>
                  Рекламная кампания для линейки сезонных коктейлей</h2><br></br>
                  <p className={styles.sectionText}>

Задача: Привлечь внимание к новой линейке сезонных коктейлей, создать ажиотаж и стимулировать продажи через яркую, эмоциональную и запоминающуюся визуальную коммуникацию.
<br></br><br></br>
Решение: Разработка комплексной креативной кампании с серией ярких, стилизованных постеров, где каждый напиток представлен как уникальный персонаж со своим характером и историей.
                </p>
                <p className={styles.sectionDescription}></p>
                           <img 
                  src="/image/polycost.svg"
                  className={styles.svgPrice}
                />
              </div>
            </section>
      
      {/* Секция контакта */}
      <div className={styles.contactSection}>
        <h3>Нужна эффектная полиграфия?</h3>
<p>
  Разработаем дизайн для печати, который впечатлит клиентов. 
  От визитки до корпоративного каталога — создадим материалы, отражающие уровень вашего бренда.
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
            Полиграфия, которая работает на имидж
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