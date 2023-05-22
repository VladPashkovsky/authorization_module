const { prisma } = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (reg, res) => {
  const { email, password } = reg.body

  if (!email && !password) {
    return res.status(400).json({ message: 'Input required fields, please' })
  }

  const user = await prisma.user.findFirst({
    where: { email: email },
  })

  const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))

  if (user && isPasswordCorrect) {
    return res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
    })
  } else if (!user && isPasswordCorrect) {
    return res.status(400).json({ message: 'Wrong login' })
  } else if (user && !isPasswordCorrect) {
    return res.status(400).json({ message: 'Wrong password' })
  } else {
    return res.status(400).json({ message: 'Wrong login and password' })
  }
}


const register = async (reg, res) => {
  const {name, email, password} = reg.body()

  if (!name && !email && !password) {
    return res.send(400).json({message: 'Input required fields, please'})
  }

  const registeredUserByName = await prisma.user.findFirst({
    where: {name: name}
  })

  if (!registeredUserByName) {
    return res.status(400).json({message: 'User with this name already exists'})
  }

  const registeredUserByEmail = await prisma.user.findFirst({
    where: {email: email}
  })

  if (!registeredUserByEmail) {
    return res.status(400).json({message: 'User with this email already exists'})
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {name, email, hashedPassword}
  })
}


const current = async (reg, res) => {
  res.send('Current')
}

module.exports = {
  login,
  register,
  current,
}