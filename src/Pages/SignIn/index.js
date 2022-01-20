import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import show from '../../Components/Assets/icons/eye.png'
import hiden from '../../Components/Assets/icons/eye-off.png'


export default function SignIn() {
  const [hide, setHide] = useState(false)
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
          <h3 style={{fontSize: '40px', color: '#373737'}}>Welcome back!</h3>
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
          <div className=" mb-3">
            <div className="password d-flex border" style={{borderRadius: '5px'}}>
              <input 
              type={hide? 'text': 'password'} 
              name="password"
              {...formik.getFieldProps('password')}
              className="form-control" 
              placeholder="Password" 
              style={{border: 'none'}}/>
              <button onClick={(e)=> {e.preventDefault();setHide(!hide)}} style={{border: 'none'}}>
               <img src={hide ? hiden: show} style={{width: 'auto', height: '25px', margin: 'auto', marginRight: '5px'}}/>
              </button>
            </div>
          {formik.touched.password && formik.errors.password && 
          <div className="error text-danger" style={{fontSize: '12px'}}>{formik.errors.password}</div>}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            style={{
              width: "100%",
              backgroundColor: "#214457",
              borderRadius: "5px",
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
