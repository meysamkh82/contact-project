import * as yup from 'yup';

export const contactSchema = yup.object({
    name:yup.string().required("The Name field is required").matches(/^[A-Za-z\u0600-\u06FF\s]+$/, 'The name field can only contain letters').max(30,'The name field must contain a maximum of 30 characters.'),
    phone:yup.string().required('The Phone feild is reruired').length(10,'The Phone field is not valid'),
    email:yup.string().email('The Email field is not valid').required('The Email field is required'),
    job:yup.string().max(30,'The Job field must contain a maximum of 30 charcters ').nullable(),
    nationalId:yup.string().trim().length(9,"The NationalId field is not valid").nullable(),
    imageName:yup.string().required('The Upload Image field is required')
})


