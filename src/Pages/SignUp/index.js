export default function SignUp() {
  return (
    <div className="container row mx-auto">
      <div className="col-sm-4 offset-4" style={styles.marginCostum}>
        <div className="text-center" style={{ marginBottom: "56px" }}>
          <h3>Join us!</h3>
        </div>

        <form>
          <div className="mb-3">
            <input type="text" name="first_name" className="form-control" placeholder="Firs Name" />
          </div>
          <div className="mb-3">
            <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-3">
            <input type="text" name="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" name="password" className="form-control" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="confirmPassword" name="confirm_password" className="form-control" placeholder="Confirm Password" />
          </div>
          <button type="submit" style={{ 
              width: "100%", 
          backgroundColor: "#214457", 
          borderRadius: "10px", 
          color: "white" 
          }}>
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

const styles = {
  marginCostum: {
    marginTop: "100px",
    marginBottom: "100px",
  },
};
