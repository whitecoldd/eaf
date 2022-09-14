import React from 'react'
import { Link } from 'react-router-dom'
import MuiDrop from '../ui/mui_drop/MuiDrop'
import Btn1 from '../ui/btn1/Btn1'
import "./header.scss"

import Logo from "../../assets/img/Logo.svg"

export default function Header() {
  return (
    <div className="header">
      <div className="header_top">
        <div className="headerTop_contacts">
          <a href="tel:+46766920094">
            <div className="header_tel_icon">
              <svg viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.61559 0H1.38441C0.621092 0 0 0.613731 0 1.36819V13.6318C0 14.3863 0.621121 15 1.38441 15H7.61559C8.37891 15 9 14.3863 9 13.6318V1.36819C9 0.613703 8.37899 0 7.61559 0ZM8.2017 13.6317C8.2017 13.951 7.93879 14.2111 7.6157 14.2111H1.38453C1.06144 14.2111 0.798527 13.9511 0.798527 13.6317V12.2366H8.20176L8.2017 13.6317ZM8.2017 11.4478H0.79847V2.88106H8.2017V11.4478ZM8.2017 2.09212H0.79847V1.36814C0.79847 1.04884 1.06138 0.788776 1.38447 0.788776H7.61565C7.93873 0.788776 8.20164 1.04872 8.20164 1.36814L8.2017 2.09212Z" fill="#0AABC1" />
              </svg>
            </div>
            <span>+46-766-92-00-94</span>
          </a>
          <a href="mailto:eaf.fond@help.com">
            <div className="header_tel_icon">
              <svg viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.01207 0C0.460272 0 0 0.453641 0 1.00529V11.9426C0 12.4943 0.460272 12.9547 1.01207 12.9547H17.9879C18.5397 12.9547 19 12.4943 19 11.9426V1.00529C19 0.453602 18.5397 0 17.9879 0H1.01207ZM1.65305 0.863559H17.3469L9.50019 6.98342L1.65305 0.863559ZM0.863559 1.33586L6.96993 6.09935L0.863559 11.531V1.33586ZM18.1363 1.33586V11.531L12.0299 6.09935L18.1363 1.33586ZM7.6647 6.63913L9.23686 7.86719C9.39198 7.98631 9.60795 7.98631 9.76306 7.86719L11.3352 6.63913L17.4682 12.0908H1.53141L7.6647 6.63913Z" fill="#0AABC1" />
              </svg>
            </div>
            <span>eaf.fond@help.com</span>
          </a>
        </div>
        <div className="headerTop_socials">
          <a href="#" className="headerOneSocial">
            <div className="headerOneSocial_icon">
              <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white" />
              </svg>
            </div>
          </a>
          <a href="#" className="headerOneSocial">
            <div className="headerOneSocial_icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 5.42875 11.6788 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z" fill="white" />
              </svg>
            </div>
          </a>
          <a href="#" className="headerOneSocial">
            <div className="headerOneSocial_icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z" fill="white" />
                <path d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z" fill="white" />
                <path d="M15.375 5.29124C15.7429 5.29124 16.0412 4.99295 16.0412 4.62499C16.0412 4.25703 15.7429 3.95874 15.375 3.95874C15.007 3.95874 14.7087 4.25703 14.7087 4.62499C14.7087 4.99295 15.007 5.29124 15.375 5.29124Z" fill="white" />
              </svg>
            </div>
          </a>
          <a href="#" className="headerOneSocial">
            <div className="headerOneSocial_icon">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.4725 6.25H0V20H4.4725V6.25Z" fill="white" />
                <path d="M16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.3525 16.3925 6.34125 16.3312 6.33125C16.0937 6.28375 15.8338 6.25 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25C15.5288 14.3363 15.5288 20 15.5288 20H20V10.7212C20 8.64375 18.5763 6.9125 16.655 6.41125Z" fill="white" />
                <path d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z" fill="white" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="header_nav_w">
        <Link to={'/'}>
          <div className="header_logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to={'/'}><span>Home</span></Link>
            </li>
            <li>
              <Link to={'/about'}><span>About us</span></Link>
            </li>
            <li>
              <MuiDrop
                DropBtn={<span>Events</span>}
                DropItems={
                  <div className="header_dropdown">
                    <Link to={'/events'}>
                      <span>All</span>
                    </Link>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                  </div>
                }
              />
            </li>
            <li>
              <MuiDrop
                DropBtn={<span>causes</span>}
                DropItems={
                  <div className="header_dropdown">
                    <Link to={'/causes'}>
                      <span>All</span>
                    </Link>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                  </div>
                }
              />
            </li>
            <li>
              <Link to={'/news'}><span>News</span></Link>
            </li>
            <li>
              <Link to={'/contacts'}><span>Contacts</span></Link>
            </li>
          </ul>
        </nav>
        <div className="headerNav_donate">
          <div className="search_w">
            <button className="search_btn">
              <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="8.5" stroke="#323232" strokeWidth="2" />
                <line x1="15.7071" y1="16.2929" x2="23.7071" y2="24.2929" stroke="#323232" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <Btn1
            text={'donate now'}
            func={() => { }}
          />
        </div>
      </div>
    </div>
  )
}