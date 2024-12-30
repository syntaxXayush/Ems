import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='min-h-screen bg-[#0a0a0a] p-6 md:p-10'>
            <Header changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard