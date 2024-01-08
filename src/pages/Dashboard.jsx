import React from 'react'
import VerticalMenu from '../components/VerticalMenu'
import DashboardContent from '../components/DashboardContent'

const Dashboard = () => {
  return (
    <div className="dashboardContent">
   <VerticalMenu className="vertical" />
   <DashboardContent className="dashboard" />
    </div>
  )
}

export default Dashboard