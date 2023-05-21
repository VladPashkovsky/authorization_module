const login = async (reg, res) => {
  res.send('Login')
}

const register = async (reg, res) => {
  res.send('Register')
}

const current = async (reg, res) => {
  res.send('Current')
}

module.exports = {
  login,
  register,
  current
}