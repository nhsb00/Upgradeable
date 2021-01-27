# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


test = User.create!(
    username: 'test',
    password: 'password',
    email: 'test@gmail.com',
    country: 'United States'
)

soobin = User.create!(
    username: 'soobin',
    password: 'soobin',
    email: 'soobin@gmail.com',
    country: 'United States'
)

dalgona_coffee = Project.create!(
    user_id: soobin.id, 
    title: 'DIY Dalgona Coffee',
    body: 'Dalgona coffee—it started during COIVD-19 as a Tik Tok trend and has now exploded all over the internet as the It-Drink of the moment.'
)