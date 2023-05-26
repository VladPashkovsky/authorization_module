const { prisma } = require('../prisma/prisma-client')

const getAllWaters = async (req, res, next) => {
  try {
    const waters = await prisma.water.findMany()
    res.status(200).json(waters)
  } catch (e) {
    res.status(500).json({ message: `Failed to get list: ${e}` })
  }
}

const getWaterById = async (req, res, next) => {
  try {
    const { id } = req.params
    const water = await prisma.water.findUnique({
      where: { id },
    })

    res.status(200).json(water)
  } catch (e) {
    return res.status(500).json({ message: `Error while getting data: ${e}` })
  }
}

const addWater = async (req, res, next) => {
  try {
    const { brand, description, details, price, imageUrl } = req.body
    if (!brand || !description || !price) {
      return res.status(400).json({ message: 'Input required fields' })
    }

    const water = await prisma.water.create({
      data: {
        ...req.body, userId: req.user.id,
      },
    })

    return res.status(201).json(water)
  } catch (e) {
    return res.status(500).json({ message: `Error while adding data: ${e}` })
  }
}

const editWater = async (req, res, next) => {
  try {
    const { id } = req.params

    await prisma.water.update({
      where: { id },
      data: { ...req.body },
    })

    return res.status(204).json('OK')
  } catch (e) {
    return res.status(500).json({ message: `Error while editing data: ${e}` })
  }
}

const remove = async (req, res, next) => {
  try {
    //const { id } = req.body
    const { id } = req.params
    await prisma.water.delete({
      where: { id },
    })

    return res.status(204).json('OK')
  } catch (e) {
    return res.status(500).json({ message: `Error while removing data: ${e}` })
  }
}

module.exports = {
  getAllWaters,
  getWaterById,
  addWater,
  editWater,
  remove,
}