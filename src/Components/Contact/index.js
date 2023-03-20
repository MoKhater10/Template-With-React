import React, { Fragment } from 'react';
import {
    ContactSection, ContactTitle, Form, FormInput, InputEmail, InputExp,
    InputSubmit, InputText, Span, TextArea
} from './style.js';
import Footer from '../Footer/index.js';

const Contact = () => {
    return (
        <Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="Email" placeholder="Your Email" />
                        </FormInput>
                        <InputText type="text" class="sub" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer/>
         </Fragment>
  );
} 

export default Contact;
