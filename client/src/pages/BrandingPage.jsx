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
                  Брендинг для пекарни Bagel` Bakery</h2><br></br>
                  <p className={styles.sectionText}>

Задача: Разработать комплексную визуальную идентичность для современной пекарни, которая передает атмосферу домашнего уюта, тепла и качественной выпечки, выделяя бренд на рынке.
<br></br><br></br>
Решение: Создание целостной системы брендинга, включающей логотип, фирменную палитру и дизайн продукции, которые работают в гармонии и формируют узнаваемый образ.
                </p>
                <p className={styles.sectionDescription}></p>
                           <img 
                  src="/image/DescriptionBB.svg"
                  className={styles.svgPrice}
                />
                <p className={styles.sectionDescription}>Применение логотипа на продукции</p>
                <img 
                  src="/image/DescriptionBB1.svg"
                  className={styles.svgPrice}
                />
              </div>
            </section>
      
      {/* Секция контакта */}
      <div className={styles.contactSection}>
        <h3>Нужен запоминающийся бренд?</h3>
<p>
  Проанализируем нишу, разработаем уникальную идентичность и создадим бренд, 
  который будет выделяться на рынке и привлекать вашу аудиторию.
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
            Брендинг с фокусом на узнаваемость
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