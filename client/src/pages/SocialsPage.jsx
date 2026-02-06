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
                  Визуальная концепция в синей гамме</h2><br></br>
                  <p className={styles.sectionText}>

Задача: Разработать целостный визуальный стиль, основанный на синем цвете, чтобы передать ценности надёжности, профессионализма и глубины бренда через современную и эмоциональную эстетику.
<br></br><br></br>
Решение: Создание многоуровневой системы коммуникации, где различные оттенки синего — от воздушного голубого до глубокого сапфирового — играют ключевую роль в формировании восприятия, выступая основным носителем настроения и смысла.
                </p>
                <p className={styles.sectionDescription}></p>
                           <img 
                  src="/image/polyvisual.svg"
                  className={styles.svgPrice}
                />
              </div>
            </section>
      
      {/* Секция контакта */}
      <div className={styles.contactSection}>
       <h3>Хотите выделиться в соцсетях?</h3>
<p>
  Разработаем единый стиль для вашего профиля: от аватара до шаблонов постов.
  Привлечем внимание аудитории и повысим вовлечённость.
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
            Дизайн для соцсетей, который вовлекает
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