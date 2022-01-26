import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import show from "../../Assets/icons/eye.png";
import hiden from "../../Assets/icons/eye-off.png";
import styles from "./../../Styling/SignUp.module.css";
import Navbar from "../../Components/NavBar/Header/Navbar";
import Footer from "../../Components/NavBar/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [hide, setHide] = useState(false);
  const [hideComfirm, setHideComfirm] = useState(false);
  const navigate = useNavigate();

  const doRegister = (values) => {
    console.log("form values", values);
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    };
    axios
      .post("https://team-b-see-event.herokuapp.com/api/v1/sign/register", data)
      .then((res) => {
        alert(res.data.message);
        navigate("/signIn");
      })
      .catch((err) => {
        if (err.response) alert(err.response.data.message);
      });
    formik.setSubmitting(false);
  };

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
      firstName: Yup.string().required("first name is a required field"),
      lastName: Yup.string().required("last name is a required field"),
      email: Yup.string().required().email("Invalid email format"),
      password: Yup.string()
        .required()
        .min(5, "Should more than 5 characters")
        .matches(/[a-z]/g, "Should contain at least 1 lowercase")
        .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
        .matches(/[0-9]/g, "Should contain at least 1 number")
        .matches(/^\S*$/, "Should not contain spaces"),
      confirmPassword: Yup.string()
        .required("confirm password is a required field")
        .oneOf([Yup.ref("password")], "Password must match"),
    }),
    //handle submission
    onSubmit: doRegister,
  });
  const isError = {
    firstName: formik.touched.firstName && formik.errors.firstName,
    lastName: formik.touched.lastName && formik.errors.lastName,
    email: formik.touched.email && formik.errors.email,
    password: formik.touched.password && formik.errors.password,
    confirmPassword:
      formik.touched.confirmPassword && formik.errors.confirmPassword,
  };
  return (
    <>
      <Navbar />
      <div className={`${styles.container} container-fluid row mx-auto`}>
        <div className="col-sm-4 mx-auto" style={{ margin: "100px 0px" }}>
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <h3 className={styles.title}>Join us!</h3>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                {...formik.getFieldProps("firstName")}
                className={`${
                  isError.firstName && "border-danger"
                } form-control`}
                placeholder="Firs Name"
              />
              {isError.firstName && (
                <div className={styles.error}>{formik.errors.firstName}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                {...formik.getFieldProps("lastName")}
                className={`${
                  isError.lastName && "border-danger"
                } form-control`}
                placeholder="Last Name"
              />
              {isError.lastName && (
                <div className={styles.error}>{formik.errors.lastName}</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="email"
                {...formik.getFieldProps("email")}
                className={`${isError.email && "border-danger"} form-control`}
                placeholder="Email"
              />
              {isError.email && (
                <div className={styles.error}>{formik.errors.email}</div>
              )}
            </div>
            <div className=" mb-3">
              <div
                className={`password d-flex border ${
                  isError.password && "border border-danger"
                }`}
                style={{ borderRadius: "5px" }}
              >
                <input
                  type={hide ? "text" : "password"}
                  name="password"
                  {...formik.getFieldProps("password")}
                  className={`${
                    isError.password && "border-danger"
                  } form-control`}
                  placeholder="Password"
                  style={{ border: "none" }}
                />
                <button
                  className={styles.btn_eye}
                  onClick={(e) => {
                    e.preventDefault();
                    setHide(!hide);
                  }}
                >
                  <img
                    className={styles.icon_eye}
                    src={hide ? hiden : show}
                    alt="icon eye"
                  />
                </button>
              </div>
              {isError.password && (
                <div className={styles.error}>{formik.errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <div
                className={`password d-flex border ${
                  isError.confirmPassword && "border border-danger"
                }`}
                style={{ borderRadius: "5px" }}
              >
                <input
                  type={hideComfirm ? "text" : "password"}
                  name="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                  className="form-control"
                  placeholder="Confirm Password"
                  style={{ border: "none" }}
                />
                <button
                  className={styles.btn_eye}
                  onClick={(e) => {
                    e.preventDefault();
                    setHideComfirm(!hideComfirm);
                  }}
                >
                  <img
                    className={styles.icon_eye}
                    src={hideComfirm ? hiden : show}
                    alt="icon eye confim"
                  />
                </button>
              </div>
              {isError.confirmPassword && (
                <div className={styles.error}>
                  {formik.errors.confirmPassword}
                </div>
              )}
            </div>
            <button
              type="submit"
              className={styles.btn_submit}
              disabled={formik.isSubmitting}
            >
              Sign Up
            </button>
            <a
              className="nav-link text-center"
              href={"/"}
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#3E89AE",
              }}
            >
              Having issue when signup?
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
