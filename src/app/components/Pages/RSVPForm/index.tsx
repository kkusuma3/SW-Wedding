"use client"
import { toast } from 'react-toastify';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { appendSpreadsheet } from '../../../pages/api/sheets';
import { Sheets } from '../../../shared/types/sheets';
import { FormValues } from './types';
import { RSVPSchema } from './validation.schema';
import LogoHeading from '../../LogoHeading';
import Container from '../../Container';

const formInitialValues: FormValues = {
    name: "",
    phone_number: "",
    holy_matrimony_attendance: "",
    holy_matrimony_guests_count: "",
    reception_attendance: "",
    reception_guests_count: ""
};

const sheetSubmissionRow = formInitialValues;

const RSVPForm = () => {

    const onSubmitClick = () => {
        console.log('success')
        toast.success("Thank you for submitting your response!", {
            position: "bottom-center"
        })
    }

    const onErrorNotification = () => {
        toast.error("Please check your response format and re-submit.", {
            position: "bottom-center"
        })
    }

    return (
        <div id="rsvp">
            <Container>
                <Formik
                    initialValues={formInitialValues}
                    validationSchema={RSVPSchema}
                    onSubmit={(
                        values: FormValues,
                        { resetForm, setSubmitting }: FormikHelpers<FormValues>
                    ) => {
                        sheetSubmissionRow.name = values.name;
                        sheetSubmissionRow.phone_number = values.phone_number;
                        sheetSubmissionRow.holy_matrimony_attendance = values.holy_matrimony_attendance;
                        sheetSubmissionRow.holy_matrimony_guests_count = values.holy_matrimony_guests_count;
                        sheetSubmissionRow.reception_attendance = values.reception_attendance;
                        sheetSubmissionRow.reception_guests_count = values.reception_guests_count;
                        appendSpreadsheet(sheetSubmissionRow, Sheets.RSVP);
                        resetForm({
                            values: formInitialValues
                        })
                        setSubmitting(false);
                    }}
                >  
                    {({ errors, isSubmitting }) => (
                        <Form className="flex flex-col justify-evenly md:w-2/3 mx-auto">
                            <LogoHeading heading="Reservation" />
                            <span className="text-lg lg:text-xl py-4 lg:py-8 w-full md:w-10/12 mx-auto text-center">Please kindly help us prepare everything better by confirming your attendance to both the Holy Matrimony and Wedding Reception with the following RSVP form:</span>
                            <div className="flex flex-col justify-evenly pt-5 md:pt-10">
                                <div className="flex flex-row flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 py-4">
                                    <div className="flex flex-col space-y-2 w-full md:w-5/12">
                                        <span className="text-lg lg:text-xl">Name: *</span>
                                        <Field type="name" name="name" placeholder="Name*" className="p-3 md:p-5 w-full rounded-md"/>
                                    </div>
                                    <div className="flex flex-col space-y-2 w-full md:w-5/12">
                                        <span className="text-lg lg:text-xl">WhatsApp Number: *</span>
                                        <Field type="phoneNumber" name="phone_number" placeholder="WhatsApp Number" className="p-3 md:p-5 w-full rounded-md"/>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 py-4">
                                    <div className="flex flex-col space-y-4 w-full md:w-5/12 md:space-y-2 items-start">
                                        <span className="text-xl lg:text-2xl font-bold pb-2 lg:pb-4">Holy Matrimony</span>
                                        <span className="text-lg lg:text-xl">Will you attend the Holy Matrimony? *</span>
                                        <div className="flex flex-row justify-start w-full text-xl">
                                            <label className="pr-8 lg:pr-12">
                                                <Field className="m-2" type="radio" name="holy_matrimony_attendance" value="Yes" />
                                                Yes
                                            </label>
                                            <label>
                                                <Field className="m-2" type="radio" name="holy_matrimony_attendance" value="No" />
                                                No
                                            </label>
                                        </div>
                                        <span className="text-lg lg:text-xl">Number of Guests: *</span>
                                        <Field as="select" name="holy_matrimony_guests_count" className="p-3 md:p-5 w-full rounded-md">
                                            <option value="" disabled selected>{`Number of Guest(s)*`}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </Field>
                                    </div>
                                    <hr className="md:hidden w-full mx-auto border-1/2 border-primary"/>
                                    <div className="flex flex-col space-y-4 w-full md:w-5/12 md:space-y-2 items-start">
                                        <span className="text-xl lg:text-2xl font-bold pb-2 lg:pb-4">Wedding Reception</span>
                                        <span className="text-lg lg:text-xl">Will you attend the Reception? *</span>
                                        <div className="flex flex-row justify-start w-full text-xl">
                                            <label className="pr-8 lg:pr-12">
                                                <Field className="m-2" type="radio" name="reception_attendance" value="Yes" />
                                                Yes
                                            </label>
                                            <label>
                                                <Field className="m-2" type="radio" name="reception_attendance" value="No" />
                                                No
                                            </label>
                                        </div>
                                        <span className="text-lg lg:text-xl">Number of Guests: *</span>
                                        <Field as="select" name="reception_guests_count" className="p-3 md:p-5 w-full rounded-md">
                                            <option value="" disabled selected>{`Number of Guest(s)*`}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </Field>
                                    </div>
                                    
                                </div>
                            </div>
                            <button
                                className="m-2 rounded-3xl w-full md:w-1/3 mx-auto p-2 md:p-3 text-white bg-primary"
                                disabled={isSubmitting}
                                onClick={JSON.stringify(errors) !== '{}' ? onErrorNotification : onSubmitClick}    
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    )
};

export default RSVPForm;