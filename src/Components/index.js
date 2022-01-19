import bgImg from "./BG.png";

export default function Home() {
  return (
    <div className="container-fluid banner" style={styles.banner}>
      <div className="container bannerContent " style={styles.bannerContent}>
          <div style={{width: '496px', height: '247px', border: 'solid'}}>
          <h1 style={{fontSize: '56px'}}>Create or Find interesting Events around The world</h1>
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
  bannerContent:{
      height: '100%',
      display: 'flex',
      alignItems: 'center'
  }
};
