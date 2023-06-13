import React, { FC } from 'react'
import LayoutBasic from '../../components/layoutBasic/LayoutBasic'
import { Table } from 'antd'
import { useGetAllWatersQuery } from '../../app/services/api'
import type { ColumnsType } from 'antd/es/table'
import { Water } from '@prisma/client'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'

const columnsWater: ColumnsType<Water> = [
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    key: 'details',
  },
]

const Home: FC = () => {
  const { data, isLoading } = useGetAllWatersQuery()
  const navigate = useNavigate()

  return (
    <LayoutBasic>
      <Table style={{opacity: '0.85'}}
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columnsWater}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return { onClick: () => navigate(`${Paths.water}/${record.id}`) }
        }}
      />
    </LayoutBasic>
  )
}

export default Home