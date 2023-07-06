import React, { FC, useState } from 'react'
import LayoutBasic from '../../components/layoutBasic/LayoutBasic'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetWaterByIdQuery, useRemoveWaterMutation } from '../../app/services/api'
import { useAppSelector } from '../../app/hooks'
// import { selectUser } from '../../features/auth/authSlice'
import { Descriptions } from 'antd'
import ButtonOne from '../../components/buttons/ButtonOne'
import './waterPage.css'


const WaterPage: FC = () => {
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useGetWaterByIdQuery(params.id || '')
  const [removeWater] = useRemoveWaterMutation()
  const { user } = useAppSelector(state => state.authReducer)
  const { waters } = useAppSelector(state => state.waterReducer)


  return (
    <LayoutBasic>
      <div className='waterForm_basic'>
        <div className='waterForm_container'>
          <Descriptions style={{margin: '20px'}} title='INFORMATION' layout='vertical' bordered>
            <Descriptions.Item label='WaterPage ID'>{params.id}</Descriptions.Item>
            <Descriptions.Item label='Brand'>{data && data.brand}</Descriptions.Item>
            <Descriptions.Item label='Description'>{data && data.description}</Descriptions.Item>
            <Descriptions.Item label='Details'>{data && data.details}</Descriptions.Item>
            <Descriptions.Item label='Price'>{data && data.price}</Descriptions.Item>
            <Descriptions.Item label='Image'>
              {<img src={data && data.imageUrl} alt='' style={{ height: '30vh' }} />}
            </Descriptions.Item>
            <Descriptions.Item label='User'>{data && data.userId}</Descriptions.Item>
          </Descriptions>
          <div className='button_container'>
            <div className='all_buttons'>
              <div>
                <ButtonOne>Back</ButtonOne>
              </div>
              <div>
                <ButtonOne>Edit</ButtonOne>
              </div>
              <div>
                <ButtonOne>Delete</ButtonOne>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBasic>
  )
}

export default WaterPage