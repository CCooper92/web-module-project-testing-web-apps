import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('renders without errors', ()=>{
    render(<ContactForm />);
});

test('renders the contact form header', ()=> {
    render(<ContactForm />)
    const header = screen.queryByText
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    const firstNameError = screen.getByRole
    // expect(screen.queryByText(/First name/i))
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
 render(<ContactForm />)

 const firstNameText = screen.getByLabelText("First Name")
 userEvent.type(firstNameInput, "Courtney")

 const lastNameText = screen.getByLabelText("Last Name")
 userEvent.type(lastNameInput, "Cooper")

 const emailText = screen.getByLabelText("Email")
 userEvent.type(emailInput, "am10ac17@gmail.com")

 const button = screen.getByRole("button");
 userEvent.click(button);
  
 const formSubmission = screen.getByText(/you submitted/i);
 console.log(formSubmission);
 expect(formSubmission).toBeInTheDocument();
});

test('renders all fields text when all fields are submitted.', async () => {
    
});
