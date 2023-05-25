const { prisma } = require('../prisma/prisma-client')

const getAllWaters = async (req, res, next) => {
  try {
    const waters = await prisma.water?.findMany()
    res.status(200).json(waters)
  } catch (e) {
    res.status(500).json({ message: `Failed to get list: ${e}` })
  }
}

const addWater = async (req, res, next) => {
  try {
    // const data = req.body
    const { brand, description, details, price, imageUrl } = req.body
    if (!brand || !description || !price) {
      return res.status(400).json({ message: 'Input required fields' })
    }
    // const water = await prisma.user.update({
    //   where: {
    //     id: req.user.id,
    //   },
    //   data: {
    //     createdProduct: { create: req.body },
    //   },
    // })

    const water = await prisma.water.create({
      data: {
        ...req.body, userId: req.user.id,
      },
    })

    return res.status(201).json(water)
  } catch (e) {
    res.status(500).json({ message: `Error while adding data: ${e}` })
  }
}

module.exports = {
  getAllWaters,
  addWater,
}