import React from 'react'
import './App.css'
import Particles from './Particles'
import ContactForm from './ContactForm'
import hyuLogo from '../src/assets/HYU_logo_singlecolor_white_png.png'


function App() {
  return (
    <div style={{ width: '100%'}}>
      <div style={{ borderBottom: '1px solid', height: '100px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', paddingLeft: '3rem' }}>
        <p style={{fontWeight: 'bold', fontSize: '32px'}}>DBI Lab.</p>
      </div>
      <div style={{position:"relative"}}>
        <Particles
          id="hero-particles"
          backgroundColor="#2c2e43"
        />
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '500px',
          width: '100%',
          textAlign: 'center',
          gap: '56px',
          flexDirection: 'column',
          pointerEvents: 'none',
        }}>
          <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '35px', margin: 0 }}>
            Welcome to Data and Business Intelligence Lab!
          </p>
          <div style={{ pointerEvents: 'auto' }}>
            <a href='https://dbilab.hanyang.ac.kr/' style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '250px',
                height: '50px',
                border: '2px solid #fff',
                borderRadius: '20px',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
              Lab Homepage
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '46px 24px',      // ← 좌우 여백
          margin: '0 auto',          // ← 가운데 정렬
          width: '90%',         // ← 본문 폭 제한(원하면 조절)
          display: 'flex',
          flexDirection: 'column',   // ← 세로로 쌓기
          alignItems: 'flex-start',  // ← 왼쪽 정렬
          gap: '8px',                // ← 문단 간격
        }}
      >
        <p style={{ fontWeight: 'bold', fontSize: '32px', color: '#0E4A84', margin: 0, textAlign: 'left' }}>
          Contact
        </p>
        <p style={{ fontSize: '16px', margin: 0, textAlign: 'left', paddingTop: '16px' }}>
          For inquiries regarding the lab and admissions, please fill out the form below.
        </p>
        <p style={{ fontSize: '16px', margin: 0, textAlign: 'left' }}>
          We will contact you via the email address you provided after reviewing your inquiry.
        </p>

        <div style={{width: '100%', marginTop: '45px'}}>
          <ContactForm />
        </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Data and Business Intelligence Lab.</h3>
          <p>College of Engineering, Hanyang University</p>
          <p>Research and Development Building Room #708-1,</p>
          <p>222 Wangsimni-ro, Seongdong-gu, Seoul, South Korea, 04763</p>
          <p className="copyright">COPYRIGHT © DBI Lab. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footer-right">
          <img src={hyuLogo} alt="Hanyang University" className="hyu-logo" />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default App