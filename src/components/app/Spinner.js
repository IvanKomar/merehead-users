import React from 'react'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'

export default function Spinner() {
  const isActive = useSelector(state => state.spinners.isLayoutSpinnerActive)

  return (
    isActive && <Spin size="large" />
  )
}
