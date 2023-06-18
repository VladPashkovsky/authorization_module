import React, { FC } from 'react'
import LayoutBasic from '../../components/layoutBasic/LayoutBasic'
import WaterForm from '../../components/waterForm/WaterForm'

const AddWater: FC = () => {
  return (
    <LayoutBasic>
        <WaterForm />
    </LayoutBasic>
  )
}

export default AddWater