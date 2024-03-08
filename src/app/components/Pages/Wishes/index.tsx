"use client"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import Image from 'next/image';
import { appendSpreadsheet } from '../../../pages/api/sheets';
import { Sheets } from '../../../shared/types/sheets';
import Container from "../../Container";
import WishesList from "../../WishesList";
import { FormValues } from './types';
import LogoHeading from '../../LogoHeading';
import { IconVerticalLine } from '@/app/shared/staticImportsSrc';

const formInitialValues = {
    name:'',
    wishes: '',
};

const sheetSubmissionRow = {
    Name: "",
    Wishes: ""
};

const FormInputClass = "bg-white w-full p-3 rounded-md";
const FormTextAreaClass = "bg-white h-32 md:h-40 p-5 resize-none rounded-md";

const Wishes = () => (
    <>
        <Formik
            initialValues={formInitialValues}
            onSubmit={(
                values: FormValues,
                { resetForm, setSubmitting }: FormikHelpers<FormValues>
            ) => {
                sheetSubmissionRow.Name = values.name;
                sheetSubmissionRow.Wishes = values.wishes;
                appendSpreadsheet(sheetSubmissionRow, Sheets.WISHES);
                resetForm({
                    values: formInitialValues
                })
                setSubmitting(false);
            }}
        >  
            {({ isSubmitting }) => (
                <div id="wishes">
                    <Form>
                        <Container>
                            <LogoHeading />
                            <div className="flex flex-row flex-wrap justify-evenly space-x-4">
                                <div className="flex flex-col justify-evenly space-y-6 text-center w-full md:w-5/12">
                                    <h4 className="text-2xl md:text-4xl font-bold">Your Wishes</h4>
                                    <span className="text-md md:text-lg">Send your warmest wishes to the bride & groom</span>
                                    <Field
                                        type="name"
                                        name="name"
                                        id="wishes-name"
                                        placeholder="Name"
                                        className={FormInputClass}
                                    />
                                    <Field
                                        component="textarea"
                                        rows="4"
                                        name="wishes"
                                        id="wishes-message"
                                        className={FormTextAreaClass }
                                        placeholder="Write your message here"
                                    />
                                    <button
                                        disabled={isSubmitting}
                                        className="m-2 rounded-3xl w-full mx-auto p-2 md:p-3 bg-primary text-white"
                                    >
                                        Send
                                    </button>
                                </div>
                                <Image className="hidden md:block" src={IconVerticalLine} alt="Vertical Line" width={1} height={100}/>
                                <div className="w-full md:w-5/12 my-auto pt-10 md:pt-0">
                                    <WishesList />
                                </div>
                            </div>
                        </Container>
                    </Form>
                </div>
            )}
        </Formik>
    </>
);

export default Wishes;