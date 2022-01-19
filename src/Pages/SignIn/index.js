export default function SignIn() {
  return (
    <div className="container row mx-auto">
      <div className="col-sm-4 offset-4" style={styles.marginCostum}>
        <div className="text-center" style={{ marginBottom: "56px" }}>
          <h3>Welcome back!</h3>
        </div>

        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" style={{ width: "100%", backgroundColor: "#214457", borderRadius: "10px", color: "white" }}>
            Sign In
          </button>
          <a className="nav-link text-center" href="#" style={{color: '#3E89AE'}}>Forgot Password?</a>
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
