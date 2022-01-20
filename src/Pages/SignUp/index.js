import { useFormik } from "formik";
import * as Yup from 'yup'


export default function SignUp() {
  const doRegister = (values)=>{
    console.log('form values',values);
    setTimeout(() => {
      formik.setSubmitting(false)
      formik.resetForm()
    }, 2000);
  }

  const formik = useFormik({
    //initial values
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    //handle schema
    validationSchema: Yup.object({
      firstName: Yup.string()
      .required('first name is a required field'),
      lastName: Yup.string()
      .required('last name is a required field'),
      email: Yup.string()
      .required()
      .email('Invalid email format'),
      password: Yup.string()
      .required()
      .min(5, 'Should more than 5 characters')
      .matches(/[a-z]/g, 'Should contain at least 1 lowercase')
      .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
      .matches(/[0-9]/g, 'Should contain at least 1 number')
      .matches(/^\S*$/, 'Should not contain spaces'),
      confirmPassword: Yup.string()
      .required('confirm password is a required field')
      .oneOf([Yup.ref('password')], 'Password must match'),
    
    }),
    //handle submission
    onSubmit: doRegister
  });
  console.log(formik);
  return (
    <div className="container-fluid row mx-auto">
      <div className="col-sm-4 mx-auto" style={{margin: '100px 0px'}}>
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <h3>Join us!</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input 
            type="text" 
            name="firstName" 
            {...formik.getFieldProps('firstName')}
            className="form-control" 
            placeholder="Firs Name" />
          {formik.touched.firstName && formik.errors.firstName && 
          <div className="error text-danger" style={{fontSize: '12px'}}>{formik.errors.firstName}</div>}
          </div>
          <div className="mb-3">
            <input 
            type="text" 
            name="lastName" 
            {...formik.getFieldProps('lastName')}
            className="form-control" 
            placeholder="Last Name" />
          {formik.touched.lastName && formik.errors.lastName && 
          <div className="error text-danger" style={{fontSize: '12px'}}>{formik.errors.lastName}</div>}
          </div>
          <div className="mb-3">
            <input 
            type="text" 
            name="email" 
            {...formik.getFieldProps('email')}
            className="form-control" 
            placeholder="Email" />
          {formik.touched.email && formik.errors.email && 
          <div className="error text-danger" style={{fontSize: '12px'}}>{formik.errors.email}</div>}
          </div>
          <div className="mb-3">
            <input 
            type="password" 
            name="password"
            {...formik.getFieldProps('password')}
            className="form-control" 
            placeholder="Password" />
          {formik.touched.password && formik.errors.password && 
          <div className="error text-danger" style={{fontSize: '12px'}}>{formik.errors.password}</div>}
          </div>
          <div className="mb-3">
            <input 
            type="password" 
            name="confirmPassword" 
            {...formik.getFieldProps('confirmPassword')}
            className="form-control" 
            placeholder="Confirm Password" />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && 
          <div className="error text-danger" style={{fontSize: '12px'}}>{formik.errors.confirmPassword}</div>}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            style={{
              width: "100%",
              backgroundColor: "#214457",
              borderRadius: "10px",
              color: "white",
            }}
          >
            Sign Up
          </button>
          <a className="nav-link text-center" href="#" style={{ color: "#3E89AE" }}>
            Having issue when signup?
          </a>
        </form>
      </div>
    </div>
  );
}
