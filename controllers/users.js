const { prisma } = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (reg, res, next) => {
  try {
    const { email, password } = reg.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Input required fields, please' })
    }

    const user = await prisma.user.findFirst({
      where: { email },
    })

    const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))
    const secret = process.env.JWT_SECRET

    if (user && isPasswordCorrect && secret) {
      return res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
      })
    } else if (!user) {
      return res.status(400).json({ message: 'Wrong email' })
    } else if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Wrong password' })
    } else {
      return res.status(400).json({ message: 'Wrong login or password' })
    }
  } catch (e) {
    next(e)
  }
}


const register = async (reg, res, next) => {
  try {
    const { name, email, password } = reg.body

    const registeredUserByName = await prisma.user.findFirst({
      where: { name },
    })

    const registeredUserByEmail = await prisma.user.findFirst({
      where: { email },
    })

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Input required fields, please' })
    } else if (registeredUserByName) {
      return res.status(400).json({ message: 'User with this name already exists' })
    } else if (registeredUserByEmail) {
      return res.status(400).json({ message: 'User with this email already exists' })
    }

    // if (!name || !email || !password) {
    //   return res.status(400).json({ message: 'Input required fields, please' })
    // }
    //
    // const registeredUserByName = await prisma.user.findFirst({
    //   where: { name },
    // })
    //
    // if (registeredUserByName) {
    //   return res.status(400).json({ message: 'User with this name already exists' })
    // }
    //
    // const registeredUserByEmail = await prisma.user.findFirst({
    //   where: { email },
    // })
    //
    // if (registeredUserByEmail) {
    //   return res.status(400).json({ message: 'User with this email already exists' })
    // }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    })

    const secret = process.env.JWT_SECRET

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
      })
    } else {
      return res.status(400).json({})
    }
  } catch (e) {
    next(e)
  }
}


const current = async (reg, res) => {
  res.status(200).json(reg.user)
}

module.exports = {
  login,
  register,
  current,
}