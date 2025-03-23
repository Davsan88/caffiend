const StatCard = ({ lg, title, children }) => {
  return (
    <div className={`card stat-card${lg ? ' col-span-2' : ''}`}>
      <h4>{title}</h4>
      {children}
    </div>
  )
}


const Stats = () => {
    return (
      <>
        <div className="section-header">
          <i className="fa-solid fa-chart-simple" />
          <h2>Stats</h2>  
        </div>  
        <div className="stats-grid">

        </div>
      </>
    )
  }
  
  export default Stats
  