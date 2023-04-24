import React, { useRef } from "react";
import styles from "./index.module.css";
import { Row, Col, Input, Button } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Map from "./Map";
import EmailContactForm from "./EmailContactForm";
import emailjs from '@emailjs/browser';
import './logo192.png'

export default function Contact() {
  const namee = 'abc'
  const templateParams = {
    name: 'James',
    notes: 'Check this out!',
    to_email: 'uyenntt71@viettel.com.vn',
    subject: 'Example Email with Embedded Image',
    html: `
      <html>
        <head>
          <meta charset="utf-8">
          <title>Email Template</title>
        </head>
        <body>
          <p>Hello, ${namee}</p>
          <p>Please see the embedded image below:</p>
          <img src="https://example.com/path/to/image.jpg">
        </body>
      </html>
    `
  };

  const sendEmail = () => {
    console.log('send email', templateParams);
    emailjs.send('service_qebivrr', 'template_t0gccbj', templateParams, 'KB0DDO79i-zMp6Pzy')
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err: any) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <div className={styles.background}>
      <Row className={styles.row}>
        <div className={styles.h2}>Contact</div>
      </Row>
      <Row className={styles.row}>
        <Col span={11}>
          <div>
            <PhoneOutlined /> 033-560-6978
          </div>
          <div style={{ paddingBottom: "2rem" }}>
            <MailOutlined /> nguyenuyendhcn@gmail.com
          </div>
          <div style={{ width: "100%", paddingBottom: "1rem" }}>
            <Input name="name" placeholder="Name" bordered={true} />
          </div>
          <div style={{ width: "100%", paddingBottom: "1rem" }}>
            <Input name="mail" placeholder="Mail" />
          </div>
          <div style={{ width: "100%", paddingBottom: "1rem" }}>
            <Input.TextArea
              name="message"
              placeholder="Message"
              allowClear={true}
              rows={10}
            />
          </div>
          <div style={{ width: "100%" }}>
            <Button className={styles.button} onClick={sendEmail}>Send</Button>
          </div>
        </Col>
        {/* <Col span={11} offset={2}>
          <Map />
        </Col> */}
      </Row>
    </div>
  );
}
