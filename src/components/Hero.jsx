const Hero = () => {
  return (
    <>
      <h1>Coffee Tracking for Coffee <abbr title="an enthusiast or devotee">Fiends!</abbr></h1>
      <div className="benefit-list">
        <h3 className="font-bolder">
          Try <span className="text-gradient">Caffiends</span> and start...
        </h3>
        <p>✅ Tracking every coffee</p>
        <p>✅ Measuring your blood caffeine levels</p>
        <p>✅ Costing and quantifying your additions</p>
      </div>
      <div className="card info-card">
        <div>
          <i class="fa-solid fa-circle-info"></i>
          <h3>Did you know...?</h3>
        </div>
        <h5>That caffeine's half-life is about 5 hours?</h5>
        <p>This means that after 5 hours, half the caffeine you consumed is still in your system, keeping you alert longer! So if you drink a cup of coffee with 200mg of caffeine, 5 hours later, you'll still have about 100mg in your system.</p>
      </div>
    </>
  )
}

export default Hero
