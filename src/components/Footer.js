import React from 'react';
import PropTypes from 'prop-types';
import facebook from '../image/facebook.svg';
import linkedin from '../image/linkedin.svg';
import instagram from '../image/instagram.svg';
import whatsapp from '../image/whatsapp.svg';
import { Container } from 'reactstrap';

function Copyright() {
  return (
    <h6 className='text-center'>
      {'Copyright © '}
      <a href='https://instagram.com/ari_darsan '>@ari_darsan</a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </h6>
  );
}

export default function Footer(props) {
  return (
    <footer id='footer' data-aos='zoom-in'>
      {/* <div style={{height:"20rem", marginTop:"-8rem"}}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#a2d9ff'
            fill-opacity='1'
            d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div> */}
      <div style={{ backgroundColor: '#a2d9ff' }} className='p-4 mt-4'>
        <Container>
          <h6 className='text-center'>Made with Great Effort and Pride</h6>
          <Copyright />
          <div
            style={{
              paddingTop: '1rem',
              display: 'flex',
              margin: 'auto',
              justifyContent: 'center',
            }}
          >
            <a
              href='https://www.facebook.com/darsan.ari'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={facebook}
                alt='facebook'
              />
            </a>
            <a
              href='https://linkedin.com/in/aridarsan'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={linkedin}
                alt='linkedin'
              />
            </a>
            <a
              href='https://instagram.com/ari_darsan'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={instagram}
                alt='instagram'
              />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=6281222288153'
              className='social-media'
              target='_blank'
              rel='noreferrer'
            >
              <img
                style={{ width: '2rem', marginRight: '1rem' }}
                src={whatsapp}
                alt='google'
              />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
