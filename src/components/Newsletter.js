import { Alert, Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"

export const Newslatter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

useEffect(() => {
    if (status === 'success') clearFields();
}, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            Email: email
        })
    } 

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe ke Surat Kabar kita</h3>
                        {status === 'sending' && <alert>Mengirim...</alert>}
                        {status === 'error' && <alert variant="danger">{message}</alert>}
                        {status === 'success' && <alert variant="success">{message}</alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}