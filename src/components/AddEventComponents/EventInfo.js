import React from 'react'
import { Formik, Form, useField } from 'formik';
import styled from "@emotion/styled";
import * as Yup from 'yup';

import "./style.css";
const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (

        <div>

            <label htmlFor={props.id || props.name}>{label}</label>

            <input className="text-input" {...field} {...props} />

            {meta.touched && meta.error ? (

                <div className="error">{meta.error}</div>

            ) : null}

        </div>

    );

};



const MyCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });

    return (

        <div>

            <label className="checkbox-input">

                <input type="checkbox" {...field} {...props} />

                {children}

            </label>

            {meta.touched && meta.error ? (

                <div className="error">{meta.error}</div>

            ) : null}

        </div>

    );

};



// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <StyledSelect {...field} {...props} />
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </>
    );
  };
const EventInfo = ( {onAdd} ) => {
    return (
        <>

            <h1>Create Your Event</h1>

            <Formik className='container'

                initialValues={{

                    name: '',

                    organizers: '',

                    address: '',
                    
                    time: '',

                    acceptedTerms: false, // added for our checkbox

                    eventType: '', // added for our select

                }}

                validationSchema={Yup.object({

                    name: Yup.string()

                        .max(15, 'Must be 15 characters or less')

                        .required('Required'),

                    organizers: Yup.string()

                        .max(20, 'Must be 20 characters or less')

                        .required('Required'),

                    address: Yup.string()

                        .max(20, 'Must be 20 characters or less')

                        .required('Required'),
                    Time: Yup.string()

                        .max(20, 'Must be 20 characters or less')

                        .required('Required'),

                    acceptedTerms: Yup.boolean()

                        .required('Required')

                        .oneOf([true], 'You must accept the terms and conditions.'),

                    eventType: Yup.string()

                        .oneOf(

                            ['this', 'this', 'this', 'other'],

                            'Invalid Event Type'

                        )

                        .required('Required'),

                })}

                onSubmit={ async (values, { setSubmitting }) => {

                    setTimeout(() => {

                        alert(JSON.stringify(values, null, 2));
                        onAdd(values)
                        setSubmitting(false);


                    }, 400);

                }}

            >

                <Form>
                    <h2>Basic Info</h2>

                    <MyTextInput label="Name" name="name" id = "name" type="text" />


                    <MyTextInput label="Oraganizers" name="orgainizers" id = "organizers" type="text" />


                    <MySelect label="Event Type" name="eventType" id = "eventType">

                        <option value="">Select an Event category</option>

                        <option value="this">This</option>

                        <option value="this">This</option>

                        <option value="this">This</option>

                        <option value="other">Other</option>

                    </MySelect>

                    <MyTextInput label="Location" name="address" type="text" id = "type"/>

                    <MyTextInput label="Time" name="time" type="date"  id = "date"/>

                    <MyCheckbox name="acceptedTerms">

                        I accept the terms and conditions

                    </MyCheckbox>



                    <button type="submit">Submit</button>

                </Form>

            </Formik>

        </>
    )
}

export default EventInfo;
