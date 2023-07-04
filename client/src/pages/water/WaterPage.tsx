import React, { FC, useState } from 'react'
import LayoutBasic from '../../components/layoutBasic/LayoutBasic'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetWaterByIdQuery, useRemoveWaterMutation } from '../../app/services/api'
import { useAppSelector } from '../../app/hooks'
// import { selectUser } from '../../features/auth/authSlice'
import { Descriptions } from 'antd'


const WaterPage: FC = () => {
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const params = useParams<{id: string}>()
  const {data, isLoading} = useGetWaterByIdQuery(params.id || '')
  const [removeWater] = useRemoveWaterMutation()
  // const user = useAppSelector(selectUser)
  const {user} = useAppSelector(state => state.authReducer)
  const {waters} = useAppSelector(state => state.waterReducer)


  return (
    <LayoutBasic>
      <div style={{background: 'lightgray', opacity: '0.95', width: '80%', margin: '20px'}}>
          <Descriptions title='INFORMATION' layout='vertical' bordered>
            <Descriptions.Item label='WaterPage ID' >{params.id}</Descriptions.Item>
            <Descriptions.Item label='Brand' >{data && data.brand}</Descriptions.Item>
            <Descriptions.Item label='Description'>{data && data.description}</Descriptions.Item>
            <Descriptions.Item label='Details'>{data && data.details}</Descriptions.Item>
            <Descriptions.Item label='Price'>{data && data.price}</Descriptions.Item>
            <Descriptions.Item label='Image'> {<img src={data && data.imageUrl} alt='' style={{height: '30vh'}} />} </Descriptions.Item>
            <Descriptions.Item label='User'>{data && data.userId}</Descriptions.Item>
          </Descriptions>
      </div>
    </LayoutBasic>
  )
}

export default WaterPage