'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Wellington Garcia',
      email: 'garciawell@gmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'Inundaweb',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
