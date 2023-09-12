import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope   } from '@fortawesome/free-solid-svg-icons';
import { faInstagram ,faFacebook , faTwitter , faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
    <div className='footer-container'>
      <div className='sec1'>
        <p className='reroute'>REROUTE</p>
        <p>lorem ipsm lorem ipsem lorem ipsum lorem ipsum lorem </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div style={{ height: '50px', width: '50px', backgroundColor: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-210px' }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <p style={{ marginLeft: '15px' }}>
              <p >Email</p>
              <p style={{ marginTop: '-20px' }}>control@logistics.com</p>
            </p>

          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: '50px', width: '50px', backgroundColor: 'black', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '-250px' }}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p style={{ marginLeft: '15px' }}>
              <p>Call Us</p>
              <p style={{ marginTop: '-20px' }}>(00) 112 456 123</p>
            </p>

          </div>

        </div>
      </div>

      <div className='sec2'>
        <div style={{ marginRight: '80px' }}>
          <p>About Us</p>
          <p>Our team</p>
          <p>How it works</p>
          <p>Mobile App</p>
          <p>Contact</p>
        </div>

        <div>
          <p>Careers</p>
          <p>Terms and Contitions</p>
          <p>Privacy policy</p>
          <p>Testimonials</p>
          <p>Partners</p>

        </div>

      </div>

      <div className='sec3'>

        <h2 style={{ height: '36px' }}>Download App</h2>
        <div>
          <img src={require('./components/googlePlay.png')} alt='google play' />
          <img src={require('./components/appStore.png')} alt='app store' />

        </div>
        <div style={{ marginTop: '20px' }}>
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '20px' }} />
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '20px' }} />
          <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '20px' }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '20px' }} />
        </div>

      </div>
    </div>
    <p className='btm'>Copyright &copy; ReRoute | Designed by Jethi Tech</p>
    </div>
  )
}

export default Footer
