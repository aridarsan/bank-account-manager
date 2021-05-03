/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import NavBar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import moment from 'moment';

const AccountDetail = () => {
  const [account, setAccount] = useState([]);
  const [history, setHistory] = useState([]);
  const params = useParams();
  // console.log(params.id)
  const url = 'https://5fad41ff2ec98b00160481c3.mockapi.io';

  const getList = () => {
    axios
      .get(url + '/detail/' + params.id)
      .then((res) => {
        setAccount(res.data);
        // console.log(account);
      })
      .catch((err) => {
        console.log(err);
        swal({
          icon: 'warning',
          title: 'Failed to load data',
          text: 'Please wait',
          type: 'warning',
          buttons: false,
          timer: 3000,
        });
      });
  };

  const getHistory = () => {
    axios
      .get(url + '/detail/' + params.id + '/history')
      .then((res) => {
        setHistory(res.data);
        // console.log(history);
      })
      .catch((err) => {
        console.log(err);
        swal({
          icon: 'warning',
          title: 'Failed to load data',
          text: 'Please wait',
          type: 'warning',
          buttons: false,
          timer: 3000,
        });
      });
  };

  useEffect(() => {
    getList();
    getHistory();
  }, []);

  return (
    <>
      {/* Navbar */}
      <NavBar />
      <div className='pt-2 pb-2 mt-7'>
        <Container >
          {account.length !== 0 ? (
            <Row>
              {/* Split Row */}
              <Col lg='6' md='12' sm='12'>
                <Row>
                  <Col>
                    <h3 className='mt-2'>Detailed Bank Account</h3>
                  </Col>
                </Row>
                <Row>
                  <>
                    <Col lg='12' md='6' sm='12' className='mb-4'>
                      <Card
                        style={{
                          backgroundColor:
                            account.name === 'BRI'
                              ? '#5163f6'
                              : account.name === 'BNI'
                              ? '#f6730b'
                              : account.name === 'BTN'
                              ? 'grey'
                              : '#1bb827',
                          color: 'white',
                          boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)',
                        }}
                      >
                        <CardBody>
                          <Row className='mb-2'>
                            <Col>
                              <p className='mb-1'>Account Number</p>
                              <h5>{account.number}</h5>
                            </Col>
                            <Col xs='4' sm='6' md='4' lg='4'>
                              <p className='mb-1'>Bank Name</p>
                              <h5>{account.name}</h5>
                            </Col>
                          </Row>
                          <Row className='mb-2'>
                            <Col>
                              <p className='mb-1'>Balance</p>
                              <h2 className='display-4'>$ {account.balance}</h2>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p className='mb-0'>
                                Last Transaction :{' '}
                                {moment(account.transaction).format(
                                  'D MMM YYYY, k:mm'
                                )}
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
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <h3 className='mt-2'>Send again</h3>
                      </Col>
                    </Row>

                    <Row className='mb-4'>
                      <Col lg='2' md='2' sm='2' xs='2'>
                        <img
                          src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5b/5baad1289443d4da7c0abd7ce569530568305718_full.jpg'
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
                          src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9c/9c5f8a461b38102aef805b821d03ae91de9c1999_full.jpg'
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
                          src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8b/8bf2ed37f8fb71c9b72db6888a12f66e72d1b589_full.jpg'
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
                          src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c1/c155de51759873fe32374f0201289e688c7d0f3e_full.jpg'
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

                    <Row className='mb-4'>
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
                                      ${account.send}
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
                                      $ {account.receive}
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

                {history.length !== 0 ? (
                  history.map((transaction, index) => (
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
                                src={transaction.image}
                                alt='imager'
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
                                <Col lg='6' md='4' sm='3' xs='6'>
                                  <CardBody className='p-0'>
                                    <h5 className='mb-3'>
                                      <strong>{transaction.to}</strong>
                                    </h5>
                                    <p className='mb-0'>
                                      {transaction.category}
                                    </p>
                                  </CardBody>
                                </Col>

                                <Col
                                  lg='6'
                                  md='4'
                                  sm='5'
                                  xs='6'
                                  className='text-right'
                                >
                                  <h5
                                    className='mb-3'
                                    style={{
                                      color:
                                        transaction.type === 'debit'
                                          ? 'red'
                                          : 'green',
                                    }}
                                  >
                                    <strong>
                                      {transaction.type === 'debit'
                                        ? '-' + transaction.amount
                                        : '+$' + transaction.amount}
                                    </strong>
                                  </h5>
                                  <p className='mb-0'>
                                    {moment(transaction.date).format(
                                      'D MMM YYYY, k:mm'
                                    )}
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <Row>
                    <Col
                      lg='12'
                      className='m-auto mb-5 text-center'
                      style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <h5>Have'nt transaction history</h5>
                      <Button color='primary' onClick={getList}>
                        Transaction now
                      </Button>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          ) : (
            <Col
              lg='12'
              className='m-auto mb-5 text-center'
              style={{
                alignContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Spinner color='primary' lg />
              <h5>Loading....</h5>
              <Button color='primary' onClick={getList}>
                Retry
              </Button>
            </Col>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AccountDetail;
