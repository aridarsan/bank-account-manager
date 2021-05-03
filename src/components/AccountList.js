/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import swal from 'sweetalert';
import '../App.css';
import AddAccount from './AddAccount';

const AccountList = () => {

    const history = useHistory();
    const [list, setList] = useState([]);
    const url = 'https://5fad41ff2ec98b00160481c3.mockapi.io';

    const getList = () => {
      axios
        .get(url + '/detail')
        .then((res) => {
          setList(res.data);
          // console.log(list);
        })
        .catch((err) => {
          console.log(err);
          swal({
            icon: 'warning',
            title: 'Failed load data',
            text: 'Please try again',
            type: 'warning',
            buttons: false,
            timer: 3000,
          });
        });
    };

    useEffect(() => {
      getList();
    }, []);

    return (
      <>
        <Container className='mb-2'>
          <Row
            className='mb-4'
            style={{ alignContent: 'center', alignItems: 'center' }}
          >
            <Col>
              <h4
                className='mt-2'
                style={{ alignContent: 'center', alignItems: 'center' }}
              >
                {' '}
                Account List
              </h4>
            </Col>
            <Col className='text-right'>
              {/* <Button size='sm' color='primary'>
                <h4 className='mb-0'>
                  {' '}
                  <i className='fa fa-plus' aria-hidden='true'></i> Add
                </h4>
              </Button> */}
              <AddAccount/>
            </Col>
          </Row>
          <Row>
            {list.length !== 0 ? (
              list.map((list, index) => (
                <>
                  <Col lg='6' md='6' sm='12' className='mb-4' key={index}>
                    {/* <NavLink to="detail/" className="account"> */}
                    <Card
                      style={{
                        backgroundColor:
                          list.name === 'BRI'
                            ? '#5163f6'
                            : list.name === 'BNI'
                            ? '#f6730b'
                            : list.name === 'BTN'
                            ? 'grey'
                            : '#1bb827',
                        color: 'white',
                        boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)',
                      }}
                      className='card'
                      onClick={() => {
                        history.push(`/detail/${list.id}`);
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
                            <h2 className='display-4'>$ {list.balance}</h2>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className='mb-0'>
                              Last Transaction :{' '}
                              {moment(list.transaction).format(
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
                    {/* </NavLink> */}
                  </Col>
                </>
              ))
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
                <Spinner color='primary' />
                <h5>Loading....</h5>
                <Button color='primary' onClick={getList}>
                  Retry
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  };


export default AccountList;
