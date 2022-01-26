import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import show from "../../Assets/icons/eye.png";
import hiden from "../../Assets/icons/eye-off.png";
import styles from "./../../Styling/SignIn.module.css";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../Redux/Action/userAction";


export default function SignIn() {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doLogin = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    axios
      .post("https://team-b-see-event.herokuapp.com/api/v1/sign/login", data)
      .then((res) => {
        console.log(res);
        dispatch(setToken(res.data.result.token));
        dispatch(setUser(JSON.stringify(res.data.result.user)))
        alert(res.data.message)
        navigate("/");
      })
      .catch((err) => {
        if (err.response) alert(err.response.data.message);
      });

    // setTimeout(() => {
    formik.setSubmitting(false);
    //   formik.resetForm()
    // }, 2000);
  };

  const formik = useFormik({
    //initial values
    initialValues: {
      email: "",
      password: "",
    },
    //handle schema
    validationSchema: Yup.object({
      email: Yup.string().required().email("Invalid email format"),
      password: Yup.string().required(),
    }),
    //handle submission
    onSubmit: doLogin,
  });
  const isError = {
    email: formik.touched.email && formik.errors.email,
    password: formik.touched.password && formik.errors.password,
  };
  return (
    <>
      <Navbar />
      <div className={`${styles.cotainer}container-fluid row mx-auto`}>
        <div className="col-sm-4 mx-auto" style={{ margin: "100px 0px" }}>
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <h3 className={styles.title}>Welcome back!</h3>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <input type="text" name="email" {...formik.getFieldProps("email")} className={`${isError.email && "border-danger"} form-control`} placeholder="Email" />
              {isError.email && <div className={styles.error}>{formik.errors.email}</div>}
            </div>
            <div className=" mb-3">
              <div className={`password d-flex border ${isError.password && "border border-danger"}`} style={{ borderRadius: "5px" }}>
                <input type={hide ? "text" : "password"} name="password" {...formik.getFieldProps("password")} className="form-control" placeholder="Password" style={{ border: "none" }} />
                <button
                  className={styles.btn_eye}
                  onClick={(e) => {
                    e.preventDefault();
                    setHide(!hide);
                  }}
                >
                  <img className={styles.icon_eye} src={hide ? hiden : show} alt="eye icon"/>
                </button>
              </div>
              {isError.password && <div className={styles.error}>{formik.errors.password}</div>}
            </div>
            <button type="submit" className={styles.btn_submit} disabled={formik.isSubmitting}>
              Sign In
            </button>
            <a className="nav-link text-center" href="#" style={{ fontWeight: "bold", fontSize: "16px", lineHeight: "25px", color: "#3E89AE" }}>
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
