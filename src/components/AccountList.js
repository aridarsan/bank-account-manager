/* eslint-disable array-callback-return */
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';

const CardList = [
  {
    number: '1223 2424 1241',
    name: 'BRI',
    balance: '$ 2000',
    transactiondate: '21 - 04 - 2021',
  },
  {
    number: '1223 2424 1241',
    name: 'BRI',
    balance: '$ 2000',
    transactiondate: '21 - 04 - 2021',
  },
  {
    number: '1223 2424 1241',
    name: 'BRI',
    balance: '$ 2000',
    transactiondate: '21 - 04 - 2021',
  },
  {
    number: '1223 2424 1241',
    name: 'BRI',
    balance: '$ 2000',
    transactiondate: '21 - 04 - 2021',
  },
];

const AccountList = () => {
  return (
    <Container className='mt-2 mb-2'>
      <Row className='mb-4'>
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
          <Button size='sm' color='primary'>
            <h4 className='mb-0'>
              {' '}
              <i class='fa fa-plus' aria-hidden='true'></i> Add Card
            </h4>
          </Button>
        </Col>
      </Row>
      <Row>
        {CardList.map((list, index) => (
          <>
            <Col className='col-md-6 col-sm-12 mb-4' key={index}>
              <Card outline color='success'>
                <CardBody>
                  <Row className='mb-2'>
                    <Col>
                      <p className='mb-1'>Account Number</p>
                      <h5>{list.number}</h5>
                    </Col>
                    <Col xs='6' sm='6' md='4' lg='4'>
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
                      <p className='mb-0'>Last Transaction : {list.transactiondate}</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};

export default AccountList;
