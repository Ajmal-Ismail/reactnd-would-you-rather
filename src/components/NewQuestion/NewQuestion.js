import React from 'react'
import { Formik } from "formik";
import { Title, Prompt, Input } from "../styled";
import * as Yup from 'yup'

export const NewQuestion = ({ onSubmit }) =>
    <div>
        <Title>New Question</Title>
        <Prompt>Would you rather!</Prompt>
        <Formik
            initialValues={{ firstOption: '', secondOption: '' }}
            validationSchema={Yup.object({
                    firstOption: Yup.string().trim().required('This field is required.'),
                    secondOption: Yup.string().trim().required('This field is required.'),}
                )}
            onSubmit={onSubmit}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit
            }) =>
                <form onSubmit={handleSubmit} className="show-question">
                    <Input placeholder="First Option"
                              className="first-option input-field"
                              name="firstOption"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstOption}>
                    </Input>
                    <div>OR</div>
                    <Input placeholder="Second Option"
                              className="second-option input-field"
                              name="secondOption"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.secondOption}>
                    </Input>
                    <button type="submit">Add</button>
                </form>
            }
        </Formik>
    </div>