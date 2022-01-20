import bgImg from "./Assets/img/banner.png";

export default function Home() {
  return (
    <div className="container-fluid banner" style={styles.banner}>
      <div className="container bannerContent " style={styles.bannerContent}>
        <div className="textContent me-auto" style={styles.textContent}>
          <h1 style={{ fontSize: "56px" }}>
            <span style={{ color: "#F2D555" }}>Create </span>or
            <span style={{ color: "#F2D555" }}> Find</span> <br />
            interesting
            <br />
            <span style={{ color: "#F2D555" }}>Events</span> around
            <br />
            The world
          </h1>
        </div>
        <div className="search">
          <form>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              style={{
                width: "704px",
                height: "56px",
                borderRadius: "99px",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  banner: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgrounPosition: "center",
    height: "800px",
    color: "white",
  },
  bannerContent: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  textContent: {
    width: "496px",
    height: "247px",
    paddingTop: "8px",
    // paddingLeft: "68px",
  },
};
