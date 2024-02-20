const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
    {
        username: "tt",
        password: "502688",
        email: "tam@gmail.com",
        role : "User",
        address : "..."
        
      }
]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
}

run()
