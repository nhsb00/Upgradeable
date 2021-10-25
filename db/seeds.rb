# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# heroku run bundle exec rails db:seeds

# User.destroy_all
# Project.destroy_all

guest = User.create!(
    username: 'guest',
    password: 'passowrd',
    email: 'guest@upgradeables.com',
    country: 'United State'
)

soobin = User.create!(
    username: 'soobin',
    password: 'soobin',
    email: 'soobin@gmail.com',
    country: 'United States'
)

dalgonacoffee = Project.create!(
    user_id: guest.id, 
    title: 'DIY Dalgona Coffee',
    body: 'Dalgona coffee—it started as a Tik Tok trend and has now exploded all over the internet as the It-Drink of the moment. Is it worth the hype? Only one way to find out.
            If you have got instant coffee, sugar, and water on hand, you can make this. It will go by faster if you have a hand mixer, but a humble regular whisk, one powerful arm, and a good dose of patience and endurance will get you there too—just make sure you are ready to feel the burn in your triceps and biceps and you will be rewarded with a nice tall glass of cold, creamy coffee that is sweetened just right. Depending on how much of a caffeine rush you want, this recipe makes enough dalgona fluff for one or two servings. It is delicious but very strong: drink at your own discretion!
            If you have made this, let us know in the comments below how you liked it! Love iced coffee? Make sure you give these sweet coffee hacks a try!
            INGREDIENTS
            2 tbsp. granulated sugar
            2 tbsp. instant coffee 
            2 tbsp. cold water
            Ice, for serving
            Milk, for serving')

step1 = Step.create!(
    head: 'Step 1',
    description: 'In a medium bowl, combine sugar, coffee, and water. Using a hand mixer or a whisk, vigorously whisk until mixture turns silky smooth and shiny, then continue whisking until it thickens and holds its lofty, foamy shape. If whisking by hand, it will take 8 to 12 minutes to get to optimal fluffiness.',
    project_id: dalgonacoffee.id
)

step2 = Step.create!(
    head: 'Step 2',
    description: 'Fill a glass most of the way full with ice and milk, then dollop and swirl the whipped coffee mixture on top, mixing before drinking, if desired.',
    project_id: dalgonacoffee.id
)
