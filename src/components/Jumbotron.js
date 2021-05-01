import { Container } from 'reactstrap';

const Jumbotron = () => {
  return (
    <>
      <div className='pt-2 pb-2' style={{ backgroundColor: '#0099ff' }}>
        <Container style={{ marginTop: '6%' }}>
          <div
            style={{
              textAlign: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
            className='mt-5 pt-4 pb-4'
          >
            <h5>Welcome Back,</h5>
            <h2 className='display-4' style={{fontWeight:"bold"}}>Jhon Doe</h2>
            <p>
              Let's manage your{' '}
              <span style={{ fontWeight: 'bold' }}>Bank Account</span> easily
              again
            </p>
          </div>
        </Container>
      </div>
      <div style={{ height: '4rem', marginTop: '-0.5rem' }}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#0099ff'
            fill-opacity='1'
            d='M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Jumbotron;
