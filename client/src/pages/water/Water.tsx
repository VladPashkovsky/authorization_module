import React, { FC, useState } from 'react'
import LayoutBasic from '../../components/layoutBasic/LayoutBasic'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetWaterByIdQuery, useRemoveWaterMutation } from '../../app/services/api'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/auth/authSlice'

const Water: FC = () => {
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const params = useParams<{id: string}>()
  const {data, isLoading} = useGetWaterByIdQuery(params.id || '')
  const [removeWater] = useRemoveWaterMutation()
  const user = useAppSelector(selectUser)

  return (
    <LayoutBasic>
      <h1> Water id {params.id} </h1>
    </LayoutBasic>
  )
}

export default Water