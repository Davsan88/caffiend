import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels } from "../utils"

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

  const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)
  const warningLevel = 
    caffeineLevel < statusLevels['low'].maxLevel
    ? 'low' 
    : caffeineLevel < statusLevels['moderate'].maxLevel 
    ? 'moderate' 
    : 'high'

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple" />
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
        <StatCard lg title="Active Caffeine Level">
          <div className="status">
            <p><span className="stat-text">{caffeineLevel}</span>mg</p>
            <h5 style={{color: statusLevels['low'].color, background: statusLevels['low'].background}}>Low</h5>
          </div>
          <p>{statusLevels['low'].description}</p>
        </StatCard>
        <StatCard title="Daily Caffeine">
          <p><span className="stat-text">{stats.daily_caffeine}</span>mg</p>
        </StatCard>
        <StatCard title="Average # of Coffees">
        <p><span className="stat-text">{stats.average_coffees}</span></p>
        </StatCard>
        <StatCard title="Daily Cost (£)">
          <p>£ <span className="stat-text">{stats.daily_cost}</span></p>
        </StatCard>
        <StatCard title="Total Cost (£)">
          <p>£ <span className="stat-text">{stats.total_cost}</span></p>
        </StatCard>
      </div>
    </>
  )
}

export default Stats
