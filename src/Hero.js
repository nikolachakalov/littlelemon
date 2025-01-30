const Hero = (props) => {
  return (
    <>
      <main>
        <div style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height:"300px"
        }}>
          <div style={{ flex: "1", display: "flex",
              alignItems: "center", padding:"30px" }}>
            
            <article style={{
              display: "flex",
              width: "100%",
              height: "inherit",
              flexDirection: "column",
              alignItems:"flex-start",
            }}>
              <h1>{props.title}</h1>
              <h3>{props.subtitle}</h3>
              <p>{props.body}</p>
              <button>{props.buttonLabel}</button>
            </article>
          </div>
          <div style={{ flex: "1", display: "flex", overflow: "hidden", height: "inherit", paddingTop:"30px" }}>
            <img src={props.imageURL} 
                 alt='' 
                 style={{ width: "100%", height:"inherit", objectFit: "cover" }}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
