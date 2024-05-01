import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Invoice.scss';
import Header from '../HomePages/Header';

const Invoice = () => {

    const [formLookupInvoice, setFormLookupInVoice] = useState({
        secretID: '',
        invoiceID: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormLookupInVoice({
            ...formLookupInvoice,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formLookupInvoice);
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <div className = 'layout'>
                    <div className='lookup-invoice-title'>TRA CỨU THÔNG TIN HÓA ĐƠN</div>
                    <form onSubmit={handleSubmit}>
                        <Container>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Mã số bí mật (Không biết input là gì, t ghi đại :V)'
                                                name='secretID'
                                                value={formLookupInvoice.secretID}
                                                onChange={handleChange}
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Control type='text' placeholder='Mã hóa đơn (Không biết input là gì, t ghi đại :V)'
                                                name='invoiceID'
                                                value={formLookupInvoice.invoiceID}
                                                onChange={handleChange}
                                    ></Form.Control>
                                </Form.Group>
                            </Row>
                        </Container>
                        <div className='d-flex justify-content-center position-relative w-100'>
                            <Button variant="primary" type='submit' className='btn-lookup-invoice'>
                                Tra cứu hóa đơn
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Invoice