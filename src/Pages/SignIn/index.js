import { useFormik } from "formik";
import * as Yup from 'yup'


export default function SignIn() {
  const doLogin = (values)=>{
    console.log('form values',values);
    setTimeout(() => {
      formik.setSubmitting(false)
      formik.resetForm()
    }, 2000);
  }

  const formik = useFormik({
    //initial values
    initialValues: {
      email: "",
      password: "",
    },
    //handle schema
    validationSchema: Yup.object({
      email: Yup.string()
      .required()
      .email('Invalid email format'),
      password: Yup.string()
      .required()
    }),
    //handle submission
    onSubmit: doLogin
  });
  console.log(formik);
  return (
    <div className="container-fluid row mx-auto">
      <div className="col-sm-4 mx-auto" style={{margin: '100px 0px'}}>
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <h3>Welcome back!</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
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
            Sign In
          </button>
          <a className="nav-link text-center" href="#" style={{ color: "#3E89AE" }}>
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}
