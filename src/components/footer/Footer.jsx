import React from 'react'
import { Link } from 'react-router-dom'
import Btn2 from '../ui/btn2/Btn2'
import "./footer.scss"

import Logo from "../../assets/img/footerLogo.svg"
import { useSelector } from 'react-redux'
import { getLatestNews } from '../../functions/helpers'

export default function Footer() {

  let news = useSelector((state) => state.globalReducer.news)

  return (
    <footer className="Footer">
      <div className="Footer_content">
        <div className="Footer_logoText">
          <div className="Footer_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Footer_text">
            <p>Charitable giving is the act of giving money, goods or time to the unfortunate, either directly or by means of a charitable trust or other worthy cause. Charitable giving as a religious act or duty is referred to as almsgiving or alms.</p>
          </div>
          <div className="Footer_socials">
            <Link to={'/'}>
              <div className="Footer_oneSocial">
                <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white" />
                </svg>
              </div>
            </Link>
            <Link to={'/'}>
              <div className="Footer_oneSocial">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8787 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 5.42875 11.6788 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8787 20 20 18.8787 20 17.5V2.5C20 1.12125 18.8787 0 17.5 0Z" fill="white" />
                </svg>
              </div>
            </Link>
            <Link to={'/'}>
              <div className="Footer_oneSocial">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z" fill="white" />
                  <path d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z" fill="white" />
                  <path d="M15.375 5.29124C15.7429 5.29124 16.0412 4.99295 16.0412 4.62499C16.0412 4.25703 15.7429 3.95874 15.375 3.95874C15.007 3.95874 14.7087 4.25703 14.7087 4.62499C14.7087 4.99295 15.007 5.29124 15.375 5.29124Z" fill="white" />
                </svg>
              </div>
            </Link>
            <Link to={'/'}>
              <div className="Footer_oneSocial">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.4725 6.25H0V20H4.4725V6.25Z" fill="white" />
                  <path d="M16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.3525 16.3925 6.34125 16.3312 6.33125C16.0937 6.28375 15.8338 6.25 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25C15.5288 14.3363 15.5288 20 15.5288 20H20V10.7212C20 8.64375 18.5763 6.9125 16.655 6.41125Z" fill="white" />
                  <path d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z" fill="white" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="Footer_column Footer_nav">
          <h4 className="title">Quick Links</h4>
          <ul>
            <li>
              <Link to={'/'}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <span>News</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <span>Events</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <span>Contacts</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer_column Footer_contacts">
          <h4 className="title">Contact Us</h4>
          <ul>
            <li>
              <a className="Footer_contact" href="tel:+46766920094">
                <div className="icon">
                  <svg viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73239 19.1679C4.2688 20.2551 2.80431 21.3425 1.34082 22.4298C0.710853 22.8974 0.518651 23.738 0.883124 24.4333C2.73418 27.9666 6.97469 29.3995 10.5394 27.5363C17.8387 23.7208 22.7711 17.2822 24.5551 9.24126C25.4262 5.31447 22.9388 1.59306 19.0454 0.725652C18.2793 0.554709 17.5176 0.959099 17.2292 1.68924C16.5614 3.38527 15.8926 5.08236 15.2239 6.7784C14.9105 7.57406 15.1238 8.44098 15.7709 8.99926C16.6185 9.73168 17.466 10.4639 18.3135 11.1955C17.2467 15.2386 14.4275 18.9186 10.8015 21.001C9.87454 20.3732 8.94693 19.7455 8.01911 19.1178C7.31071 18.6384 6.41889 18.6581 5.73244 19.1678L5.73239 19.1679Z" fill="white" />
                  </svg>
                </div>
                <span>+46-766-92-00-94</span>
              </a>
            </li>
            <li>
              <a className="Footer_contact" href="mailto:eaf.fond@help.com">
                <div className="icon">
                  <svg viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5941 3.68843L14.5944 10.6886L0.594635 3.68843V0.188477H28.5941V3.68843Z" fill="white" />
                    <path d="M0.594543 5.43872V21.1883H28.594V5.43872L14.5943 12.4388L0.594543 5.43872Z" fill="white" />
                  </svg>
                </div>
                <span>eaf.fond@help.com</span>
              </a>
            </li>
            <li className="Footer_contact">
              <div className="icon">
                <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5962 0.188477C5.24361 0.188477 0.0942993 5.31145 0.0942993 11.6296C0.0942993 14.3074 1.00377 16.3742 3.10059 19.499C5.19571 22.6237 11.5962 31.1885 11.5962 31.1885C11.5962 31.1885 17.9968 22.6257 20.088 19.499C22.1866 16.3759 23.0943 14.3074 23.0943 11.6296C23.0945 5.31145 17.9452 0.188477 11.5962 0.188477ZM11.5962 15.9554C9.19495 15.9554 7.24842 14.0188 7.24842 11.6298C7.24842 9.24434 9.19495 7.3043 11.5962 7.3043C13.9974 7.3043 15.944 9.24427 15.944 11.6298C15.944 14.0188 13.9974 15.9554 11.5962 15.9554Z" fill="white" />
                </svg>
              </div>
              <span>London, 45 Maydwell House</span>
            </li>
          </ul>
        </div>

        <div className="Footer_column">
          <h4 className="title">Trending News</h4>
          <div className="Footer_column_newsW">
            {getLatestNews(news, 'newDate').slice(0, 2).map((item) => {
              return (
                <div key={item.id} className="small_newCard">
                  <div className="img">
                    <img src={'../img/' + item.img} alt="" />
                  </div>
                  <div className="content">
                    <h5 className="title">{item.title}</h5>
                    <Link to={'/news/' + item.id} className="button">
                      <Btn2 text={'Read More'} func={() => { }} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="Footer_copyright">
        © 2022 EAF is Powered  by 
        <a href="#">MIXTECHNOLOGY</a>
      </div>
    </footer>
  )
}