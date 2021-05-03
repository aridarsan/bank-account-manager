import axios from 'axios';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
} from 'reactstrap';
import swal from 'sweetalert';

const AddAccount = (props) => {
  const [modal, setModal] = useState(false);
  const [number, setNumber] = useState("")
  const [bankName, setBankName] = useState("")
  const [balance, setBalance] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggle = () => setModal(!modal);
  const url = 'https://5fad41ff2ec98b00160481c3.mockapi.io';

  const account = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    const data = {
      name: bankName,
      number: number,
      balance: balance
    };

    axios
      .post(`${url}/detail`, data)
      .then((res) => {
        console.log(res)
        setModal(false)
        setIsSubmitting(false)

        swal({
          icon: "success",
          title: "Done",
          text: "Your account has been added, reload the page",
          type: "success",
          buttons: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        // console.log(err);
        setModal(false)
        setIsSubmitting(false)
        swal({
          icon: "warning",
          title: "Failed",
          text: "Please try again",
          type: "warning",
          buttons: false,
          timer: 3000,
        });
        
      });

  }

  return (
    <div>
      <Button color='primary' onClick={toggle}>
        <i className='fa fa-plus' aria-hidden='true'></i> Add Bank
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ marginTop: '10%' }}>
        <ModalHeader toggle={toggle}>Add New Bank Account</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for='exampleEmail'>Bank Name</Label>
              <Input
                type='text'
                name='email'
                id='bank-name'
                placeholder='Name'
                onChange={(e) => setBankName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>Account Number</Label>
              <Input
                type='text'
                name='email'
                id='account-number'
                placeholder='Number'
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>Balance</Label>
              <Input
                type='number'
                name='number'
                id='balance'
                placeholder='00'
                onChange={(e) => setBalance(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={account}>
            {isSubmitting ? <Spinner/> : "Save"}
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddAccount;
