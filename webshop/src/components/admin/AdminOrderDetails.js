import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/admin.css';

export default function AdminOrderDetails() {
  return (
    <>
    <h2 className="admin-h2">AdminOrderDetails</h2>
    <Link className="admin-back-btn" to='/admin/megrendelesek'>vissza</Link>
    </>
  )
}
