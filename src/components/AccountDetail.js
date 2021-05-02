import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import NavBar from './Navbar';
import facebook from '../image/facebook.svg';
import Footer from './Footer';

const CardList = [
  {
    number: '1223 2424 1241',
    name: 'BRI',
    balance: '$ 2,000',
    transactiondate: '21 - 04 - 2021',
  },
];

const History = [
  {
    to: 'Spotify',
    category: 'Entertainment',
    amount: '-$20',
    date: 'Yesterday',
    profil: facebook,
    type: 'send',
  },
  {
    to: 'Jacob Brian',
    category: 'Gift',
    amount: '$50',
    date: 'Today, 4:30 PM',
    profil: facebook,
    type: 'received',
  },
];

const AccountDetail = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />
      <div className='pt-2 pb-2 mt-7'>
        <Container style={{ marginTop: '7%' }}>
          <Row>
            {/* Split Row */}
            <Col lg='6' md='12' sm='12'>
              <Row>
                <Col>
                  <h3 className='mt-2'>Detailed Bank Account</h3>
                </Col>
              </Row>
              <Row>
                {CardList.map((list, index) => (
                  <>
                    <Col lg='12' md='6' sm='12' className='mb-4' key={index}>
                      <Card
                        style={{
                          backgroundColor:
                            list.name === 'BRI'
                              ? '#5163f6'
                              : list.name === 'BNI'
                              ? '#f6730b'
                              : list.name === 'BTN'
                              ? '#a10e0e'
                              : '#1bb827',
                          color: 'white',
                          boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)',
                        }}
                      >
                        <CardBody>
                          <Row className='mb-2'>
                            <Col>
                              <p className='mb-1'>Account Number</p>
                              <h5>{list.number}</h5>
                            </Col>
                            <Col xs='4' sm='6' md='4' lg='4'>
                              <p className='mb-1'>Bank Name</p>
                              <h5>{list.name}</h5>
                            </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Col>
                              <p className='mb-1'>Balance</p>
                              <h2 className='display-4'>{list.balance}</h2>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p className='mb-0'>
                                Last Transaction : {list.transactiondate}
                              </p>
                            </Col>
                            <Col lg='4' md='6' xs='4'>
                              <h4>VISA</h4>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                      <Row className='mt-4'>
                        <Col>
                          <Button className='mr-2' color='danger'>
                            <i
                              className='fa fa-arrow-up  mr-2'
                              aria-hidden='true'
                            ></i>
                            Send
                          </Button>
                          <Button color='success' className='mr-2'>
                            <i
                              className='fa fa-arrow-down mr-2'
                              aria-hidden='true'
                            ></i>
                            Request
                          </Button>
                          <Button color='warning' className='mr-2'>
                            <i
                              className='fa fa-credit-card mr-2'
                              aria-hidden='true'
                            ></i>
                            Top Up
                          </Button>
                          <Button color='info' className='mr-2'>
                            <i
                              className='fa fa-file mr-2'
                              aria-hidden='true'
                            ></i>
                            Bill
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </>
                ))}
              </Row>

              <Row>
                <Col>
                  <Row>
                    <Col>
                      <h3 className='mt-2'>Send again</h3>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col lg='2' md='2' sm='2' xs='2'>
                      <img
                        src={facebook}
                        alt='img transaction'
                        style={{
                          height: '70px',
                          border: '1px solid grey',
                          borderRadius: '10px',
                        }}
                        className='img-transaction'
                      />
                    </Col>
                    <Col lg='2' md='2' sm='2' xs='2'>
                      <img
                        src={facebook}
                        alt='img transaction'
                        style={{
                          height: '70px',
                          border: '1px solid grey',
                          borderRadius: '10px',
                        }}
                        className='img-transaction'
                      />
                    </Col>
                    <Col lg='2' md='2' sm='2' xs='2'>
                      <img
                        src={facebook}
                        alt='img transaction'
                        style={{
                          height: '70px',
                          border: '1px solid grey',
                          borderRadius: '10px',
                        }}
                        className='img-transaction'
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <h3 className='mt-2'>Total Transaction</h3>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col>
                      <Card
                        style={{
                          boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)',
                        }}
                        className='p-1'
                      >
                        <CardBody>
                          <Row>
                            <Col
                              style={{
                                border: '1px solid grey',
                                borderRadius: '5px',
                              }}
                              className='pl-2 pr-2 mr-2'
                            >
                              <Row>
                                <Col lg='9' md='8' sm='8' xs='8'>
                                  <p className='m-0'>Send</p>
                                  <h2 style={{ color: 'red' }}>
                                    <i
                                      className='fa fa-arrow-circle-up'
                                      aria-hidden='true'
                                    ></i>{' '}
                                    $400{' '}
                                  </h2>
                                </Col>
                              </Row>
                            </Col>

                            <Col
                              style={{
                                border: '1px solid grey',
                                borderRadius: '5px',
                              }}
                              className='pl-2 pr-2'
                            >
                              <Row>
                                <Col>
                                  <p className='m-0'>Receive</p>
                                  <h2 style={{ color: 'green' }}>
                                    {' '}
                                    <i
                                      className='fa fa-arrow-circle-down'
                                      aria-hidden='true'
                                    ></i>{' '}
                                    $800
                                  </h2>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col lg='6' md='6' sm='12'>
              <Row>
                <Col className='mt-2'>
                  <h3>Transaction History</h3>
                </Col>
              </Row>

              {History.map((transaction, index) => (
                <Row key={index}>
                  <Col lg='12' md='12'>
                    <Card
                      className='mb-2'
                      style={{
                        boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)',
                      }}
                    >
                      <Row className='p-3'>
                        <Col lg='2' md='3' sm='2' xs='2'>
                          <img
                            src={transaction.profil}
                            alt='img transaction'
                            style={{
                              height: '70px',
                              border: '1px solid grey',
                              borderRadius: '10px',
                            }}
                            className='img-transaction'
                          />
                        </Col>

                        <Col>
                          <Row>
                            <Col lg='5' md='4' sm='3' xs='6'>
                              <CardBody className='p-0'>
                                <h5 className='mb-3'>
                                  <strong>{transaction.to}</strong>
                                </h5>
                                <p className='mb-0'>{transaction.category}</p>
                              </CardBody>
                            </Col>

                            <Col
                              lg='7'
                              md='4'
                              sm='5'
                              xs='6'
                              className='text-right'
                            >
                              <h5
                                className='mb-3'
                                style={{
                                  color:
                                    transaction.type === 'send'
                                      ? 'red'
                                      : 'green',
                                }}
                              >
                                <strong>{transaction.amount}</strong>
                              </h5>
                              <p className='mb-0'>{transaction.date}</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              ))}

            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AccountDetail;
