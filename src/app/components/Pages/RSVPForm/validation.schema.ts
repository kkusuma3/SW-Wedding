import * as Yup from 'yup';

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/


export const RSVPSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone_number: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid'),
    holy_matrimony_attendance: Yup.string().required('Required'),
    holy_matrimony_guests_count: Yup.string(),
    reception_attendance: Yup.string().required('Required'),
    reception_guests_count: Yup.string(),
});
