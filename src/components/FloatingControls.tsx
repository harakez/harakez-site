// "use client";

// import React, { useState, useEffect, useRef, useCallback } from 'react';

// interface AppSettings {
//   language: string;
//   isMusicOn: boolean;
//   buttonsVisible: boolean;
//   buttonsOpacity: number;
// }

// const FloatingControls = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [currentLanguage, setCurrentLanguage] = useState('ru');
//   const [musicMenuOpen, setMusicMenuOpen] = useState(false);
//   const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
//   const [isMusicOn, setIsMusicOn] = useState(false);
//   const [buttonsVisible, setButtonsVisible] = useState(true);
//   const [buttonsOpacity, setButtonsOpacity] = useState(1);
  
//   const audioRef = useRef<HTMLAudioElement>(null);

//   // Загрузка настроек при монтировании
//   useEffect(() => {
//     setIsMounted(true);
    
//     // Загружаем настройки из localStorage
//     const savedSettings = localStorage.getItem('appSettings');
//     if (savedSettings) {
//       try {
//         const settings: AppSettings = JSON.parse(savedSettings);
//         setCurrentLanguage(settings.language || 'ru');
//         setIsMusicOn(settings.isMusicOn || false);
//         setButtonsVisible(settings.buttonsVisible !== false);
//         setButtonsOpacity(settings.buttonsOpacity || 1);
//       } catch (e) {
//         console.error('Error loading settings:', e);
//       }
//     } else {
//       // Определяем язык по умолчанию
//       const browserLanguage = navigator.language.split('-')[0];
//       setCurrentLanguage(['ru', 'en'].includes(browserLanguage) ? browserLanguage : 'ru');
//     }
//   }, []);

//   // Сохранение настроек при изменении
//   useEffect(() => {
//     if (!isMounted) return;
    
//     const settings: AppSettings = {
//       language: currentLanguage,
//       isMusicOn,
//       buttonsVisible,
//       buttonsOpacity
//     };
    
//     localStorage.setItem('appSettings', JSON.stringify(settings));
//   }, [currentLanguage, isMusicOn, buttonsVisible, buttonsOpacity, isMounted]);

//   // Функции для музыки
//   const toggleMusic = useCallback(() => {
//     if (audioRef.current) {
//       if (isMusicOn) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play().catch(e => console.log("Auto-play was prevented:", e));
//       }
//       setIsMusicOn(!isMusicOn);
//     }
//     setMusicMenuOpen(false);
//   }, [isMusicOn]);

//   // Функция изменения прозрачности
//   const changeOpacity = useCallback(() => {
//     setButtonsOpacity(prev => {
//       // Циклически меняем прозрачность: 1 → 0.7 → 0.4 → 1
//       if (prev === 1) return 0.7;
//       if (prev === 0.7) return 0.4;
//       return 1;
//     });
//   }, []);

//   // Функция скрытия кнопок (до перезагрузки)
//   const hideButtons = useCallback(() => {
//     setButtonsVisible(false);
//   }, []);

//   // Стили с уменьшенными размерами
//   const buttonSize = 45;
//   const fontSize = 18;

//   const buttonStyle = {
//     width: `${buttonSize}px`,
//     height: `${buttonSize}px`,
//     borderRadius: '50%',
//     backgroundColor: '#2c3e50',
//     color: 'white',
//     border: 'none',
//     fontSize: `${fontSize}px`,
//     cursor: 'pointer',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     userSelect: 'none' as const,
//     opacity: buttonsOpacity
//   };

//   const menuButtonStyle = {
//     padding: '6px 10px',
//     borderRadius: '15px',
//     backgroundColor: '#34495e',
//     color: 'white',
//     border: 'none',
//     cursor: 'pointer',
//     boxShadow: '0 1px 5px rgba(0,0,0,0.2)',
//     transition: 'all 0.2s ease',
//     fontSize: '12px',
//     margin: '3px 0'
//   };

//   const menuStyle = {
//     position: 'absolute' as const,
//     display: 'flex',
//     flexDirection: 'column' as const,
//     gap: '3px',
//     marginTop: '8px',
//     padding: '8px',
//     borderRadius: '12px',
//     backgroundColor: '#2c3e50',
//     boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
//     zIndex: 1001,
//     right: '0',
//     minWidth: '120px'
//   };

//   if (!isMounted || !buttonsVisible) {
//     return null;
//   }

//   return (
//     <>
//       {/* 
//         Поместите файл музыки в папку public вашего Next.js проекта
//         Например: public/sounds/music.mp3 
//         И обновите путь ниже соответственно
//       */}
//       <audio ref={audioRef} loop preload="none">
//         <source src="public/sounds/harakez.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Кнопка переключения языка - размещена справа */}
//       <div
//         style={{
//           position: 'fixed',
//           right: '20px',
//           top: '20px',
//           zIndex: 1000,
//           cursor: 'pointer'
//         }}
//       >
//         <div
//           style={buttonStyle}
//           onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.1)';
//             e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)';
//             e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
//           }}
//         >
//           {currentLanguage === 'ru' ? '🇷🇺' : '🇺🇸'}
//         </div>

//         {languageMenuOpen && (
//           <div style={menuStyle}>
//             <div
//               style={menuButtonStyle}
//               onClick={() => {
//                 setCurrentLanguage('ru');
//                 setLanguageMenuOpen(false);
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               🇷🇺 Русский
//             </div>
            
//             <div
//               style={menuButtonStyle}
//               onClick={() => {
//                 setCurrentLanguage('en');
//                 setLanguageMenuOpen(false);
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               🇺🇸 English
//             </div>
            
//             <div style={{ borderTop: '1px solid #5d6d7e', margin: '5px 0' }}></div>
            
//             <div
//               style={menuButtonStyle}
//               onClick={changeOpacity}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               👁️ Прозрачность
//             </div>
            
//             <div
//               style={menuButtonStyle}
//               onClick={hideButtons}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               ❌ Скрыть
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Кнопка управления музыкой - размещена справа под языковой */}
//       <div
//         style={{
//           position: 'fixed',
//           right: '20px',
//           top: '75px',
//           zIndex: 1000,
//           cursor: 'pointer'
//         }}
//       >
//         <div
//           style={buttonStyle}
//           onClick={() => setMusicMenuOpen(!musicMenuOpen)}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.1)';
//             e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)';
//             e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
//           }}
//         >
//           {isMusicOn ? '🔊' : '🔇'}
//         </div>

//         {musicMenuOpen && (
//           <div style={menuStyle}>
//             <div
//               style={menuButtonStyle}
//               onClick={toggleMusic}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               {isMusicOn ? '🔇 Выкл' : '🔊 Вкл'}
//             </div>
            
//             <div
//               style={menuButtonStyle}
//               onClick={changeOpacity}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               👁️ Прозрачность
//             </div>
            
//             <div
//               style={menuButtonStyle}
//               onClick={hideButtons}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3d566e';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#34495e';
//               }}
//             >
//               ❌ Скрыть
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default FloatingControls;