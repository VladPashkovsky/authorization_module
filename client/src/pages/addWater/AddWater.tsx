import React, { FC, useEffect, useState } from 'react'
import LayoutBasic from '../../components/layoutBasic/LayoutBasic'
import WaterForm from '../../components/waterForm/WaterForm'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/auth/authSlice'
import { useAddWaterMutation } from '../../app/services/api'
import { Water } from '@prisma/client'
import { Paths } from '../../paths'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

const AddWater: FC = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const user = useAppSelector(selectUser)
  const [addWater] = useAddWaterMutation()

  const addNewWater = async (data: Water) => {
    try {
      await addWater(data).unwrap()
      navigate(`${Paths.status}/created`)
    } catch (e) {
      const ifError = isErrorWithMessage(e)
      if (ifError) {
        setError(e.data.message)
      } else {
        setError('Unknown error')
      }
    }
  }

  useEffect(() => {
    !user && navigate('/')
  }, [navigate, user])

  return (
    <LayoutBasic>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <WaterForm
          title='Add New Water'
          btnText='Add'
          onFinish={addNewWater}
          error={error}
        />
      </div>

    </LayoutBasic>
  )
}

export default AddWater