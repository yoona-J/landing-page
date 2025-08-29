import React, { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'

function App() {
  const [hoveredSection, setHoveredSection] = useState(null)
  const [isContactPage, setIsContactPage] = useState(false)
  const [showHomeText, setShowHomeText] = useState(true)
  const [isHomeTextFading, setIsHomeTextFading] = useState(false)

  const handleHomePageClick = () => {
    window.location.href = 'https://dbilab.hanyang.ac.kr/'
  }

  const handleContactClick = () => {
    // 먼저 페이드아웃 애니메이션 적용
    setIsHomeTextFading(true)
    
    // 페이드아웃 완료 후 Contact 모드로 전환
    setTimeout(() => {
      setIsContactPage(true)
      setShowHomeText(false)
      setIsHomeTextFading(false)
    }, 300) // 0.3초 페이드아웃
  }

  const handleBackClick = () => {
    setIsContactPage(false)
    // DBI LAB 텍스트가 중앙으로 돌아간 후에 Go to Home Page 텍스트 표시
    setTimeout(() => {
      setShowHomeText(true)
    }, 400) // 0.4초 지연 (애니메이션 중간 시점)
  }

  return (
    <div className="app-container">
      <div className={`main-layout ${isContactPage ? 'contact-mode' : ''}`}>
        {/* 왼쪽 패널 (흰색) */}
        <div 
          className={`left-panel ${isContactPage ? 'contact-mode' : ''}`}
          onMouseEnter={() => !isContactPage && setHoveredSection('left')}
          onMouseLeave={() => !isContactPage && setHoveredSection(null)}
          onClick={!isContactPage ? handleHomePageClick : undefined}
        >
          {!isContactPage && showHomeText && (
            <div className={`home-text ${hoveredSection === 'left' ? 'hovered' : ''} ${isHomeTextFading ? 'fade-out' : ''}`}>
              <span className="desktop-text">Go to Home Page</span>
              <span className="mobile-text">Home</span>
            </div>
          )}
        </div>

        {/* 오른쪽 패널 (파란색) */}
        <div 
          className={`right-panel ${isContactPage ? 'contact-mode' : ''}`}
          onMouseEnter={() => !isContactPage && setHoveredSection('right')}
          onMouseLeave={() => !isContactPage && setHoveredSection(null)}
          onClick={!isContactPage ? handleContactClick : undefined}
        >
          {!isContactPage ? (
            <div className={`contact-text ${hoveredSection === 'right' ? 'hovered' : ''}`}>
              <span className="desktop-text">Contact</span>
              <span className="mobile-text">Contact</span>
            </div>
          ) : (
            <div className="contact-content">
              {/* 뒤로 가기 버튼 */}
              <button className="back-button" onClick={handleBackClick}>
                <div className="back-arrow"></div>
              </button>
              
              {/* Contact 제목 */}
              <h1 className="contact-title">Contact</h1>
              
              {/* 설명 텍스트 */}
              <p className="contact-description">
                For inquiries regarding the lab and admissions, please fill out the form below.<br/>
                We will contact you via the email address you provided after reviewing your inquiry.
              </p>
              
              {/* Contact 폼 */}
              <div className="contact-form-container">
                <ContactForm />
              </div>
            </div>
          )}
        </div>

        {/* 중앙 DBI LAB 텍스트 */}
        <div className={`center-text ${isContactPage ? 'contact-mode' : ''}`}>
          <span className="dbi-text">DBI&nbsp;</span>
          <span className={`lab-text ${isContactPage ? 'contact-mode' : ''}`}>LAB</span>
        </div>
      </div>
    </div>
  )
}

export default App