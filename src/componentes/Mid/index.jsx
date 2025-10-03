import'./index.css';

const Mid =()=>{

  return (
    <div className="Middle">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active"> 
            <img src="/bmw4.jpg" className="d-block w-100 h-100 image" alt="BMW 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide Label</h5>
              <p className='sentence'>Experience luxury and performance like never before.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/bmw5.jpg" className="d-block w-100 h-100 image" alt="BMW 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Label</h5>
              <p className='sentence'>Innovative design with powerful engineering.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/bmw6.jpg" className="d-block w-100 h-100 image" alt="BMW 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p className='sentence'>The ultimate driving machine, redefined.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     
<div className="card-section bg-dark" >

  <div className="card">
    <img src="bmw m4.jpg" alt="BMW M4" />
    <h3>BMW M4</h3>
    <p>High-performance coupe with aggressive styling and precision handling.</p>
    <button>Explore</button>
  </div>

  <div className="card">
    <img src="bmw4.jpg" alt="BMW X5" height={"145px"} />
    <h3 >BMW X5</h3>
    <p>Aggressive styling meets flawless engineering, giving you a machine that dominates</p>
    <button >Explore</button>
  </div>

  <div className="card">
    <img src="bmw x8.webp" alt="BMW i8" />
    <h3>BMW i8</h3>
    <p>Hybrid sports car with futuristic design and eco-friendly performance.</p>
    <button>Explore</button>
  </div>

    <div className="card" >
    <img src="bmw5.jpg" alt="BMW i8" height={"145px"} />
    <h3>BMW x5</h3>
    <p>The BMW X5 blends luxury, power, and advanced technology, offering unmatched comfort</p>
    <button>Explore</button>
  </div>

    <div className="card">
    <img src="bmw6.jpg" alt="BMW M4" height={"145px"} />
    <h3>BMW M4</h3>
    <p>A masterpiece of futuristic design and innovation, it proves that eco-friendly </p>
    <button>Explore</button>
  </div>

      <div className="card">
    <img src="bmw1.jpg" alt="BMW " height={"145px"} />
    <h3>BMW M4</h3>
    <p>A masterpiece of futuristic design and innovation, it proves that eco-friendly </p>
    <button>Explore</button>
  </div>

</div>


    </div>
  )

}


export default Mid;


