const StatCard = ({ lg, title, children }) => {
  return (
    <div className={`card stat-card${lg ? ' col-span-2' : ''}`}>
      <h4>{title}</h4>
      {children}
    </div>
  )
}


const Stats = () => {
  const stats = {
    daily_caffeine: 240,
    daily_cost: 68,
    average_coffees: 2.3,
    total_cost: 220
  }

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple" />
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
        <StatCard lg title="Active Caffeine Level">
          <div className="status">
            <p><span></span></p>
          </div>
        </StatCard>
        <StatCard title="Daily Caffeine"></StatCard>
        <StatCard title="Average # of Coffees"></StatCard>
        <StatCard title="Daily Cost (£)"></StatCard>
        <StatCard title="Total Cost (£)"></StatCard>
      </div>
    </>
  )
}

export default Stats
