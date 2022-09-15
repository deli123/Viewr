# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
User.destroy_all
Photo.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

# Create one user with an easy to remember username, email, and password:
demo =
  User.create!(
    fname: "Guest",
    lname: "User",
    username: "demouser",
    email: "demo@user.io",
    password: "password",
    about: "Analyst. Coffee fanatic. Extreme twitter trailblazer. Social media lover. Internet guru. Hardcore bacon maven. Total introvert."
  )

user1 =
  User.create!(
    fname: "Candance",
    lname: "Wolf",
    username: "wolfie",
    email: "wolfie@greenfelder.co",
    password: "password",
    about: "Prone to fits of apathy. Twitter specialist. Beer maven. Incurable internet geek. Total creator. Freelance music trailblazer."
  )

user2 =
  User.create!(
    fname: "Joseph",
    lname: "Batz",
    username: "josephbatz",
    email: "sol@crona-deckow.co",
    password: "password",
    about: "Beeraholic. Certified bacon fan. Tv enthusiast. Wannabe problem solver. Incurable travel geek. Internet fanatic."
  )

user3 =
  User.create!(
    fname: "Shawana",
    lname: "Jones",
    username: "shawana",
    email: "shawana@mohr.biz",
    password: "password",
    about: "Tv expert. Student. Social media buff. Subtly charming coffeeaholic. Incurable web enthusiast."
  )

user4 =
  User.create!(
    fname: "Marine",
    lname: "Johnson",
    username: "marinejohnson",
    email: "marinejohnson@mertz.net",
    password: "password",
    about: "Food ninja. Typical tv aficionado. Organizer. Pop culture practitioner. Music nerd. Entrepreneur."
  )

10.times do 
  User.create!({
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    username: Faker::Internet.unique.username(specifier: 3),
    email: Faker::Internet.unique.email,
    password: 'password',
    about: Faker::Quote.yoda
  }) 
end

path = "https://viewr-pro.s3.us-west-1.amazonaws.com/"

photo1 =
  Photo.create!(
    title: "I am stunned",
    description:
      "Tall buildings have been a part of our cities for generations. In some cases, they are truly stunning.",
    user_id: demo.id
  )
file = URI.open("#{path}photo1.jpg")
photo1.photo.attach(io: file, filename: "photo1.jpg")

photo2 =
  Photo.create!(
    title: "Beautiful",
    description:
      "Tall buildings. Awesome, glorious, beautiful buildings.",
    user_id: demo.id
  )
file = URI.open("#{path}photo2.jpg")
photo2.photo.attach(io: file, filename: "photo2.jpg")

photo3 =
  Photo.create!(
    title: "I love tall buildings!",
    description:
      "This is the best collection of tall buildings around the world, in most cases the tallest buildings by roof height. It is not a ranking, but an alternative way to see this amazing world of architecture.",
    user_id: demo.id
  )
file = URI.open("#{path}photo3.jpg")
photo3.photo.attach(io: file, filename: "photo3.jpg")

photo4 =
  Photo.create!(
    title: "This is the future!",
    description:
      "The buildings of the future will be tall, glorious, and beautiful. Here are the architects and designers who will be deciding what's beautiful.",
    user_id: demo.id
  )
file = URI.open("#{path}photo4.jpg")
photo4.photo.attach(io: file, filename: "photo4.jpg")

photo5 =
  Photo.create!(
    title: "Work of art",
    description:
      "The height of buildings is a common topic in architecture and engineering, but surprisingly, it is rarely discussed in the context of art.",
    user_id: demo.id
  )
file = URI.open("#{path}photo5.jpg")
photo5.photo.attach(io: file, filename: "photo5.jpg")

photo6 =
  Photo.create!(
    title: "Architecture",
    description:
      "Tall, Amazing, Glorious, Beautiful, Buildings, Architecture, Architecture",
    user_id: user1.id
  )
file = URI.open("#{path}photo6.jpg")
photo6.photo.attach(io: file, filename: "photo6.jpg")

photo7 =
  Photo.create!(
    title: "I love this",
    description:
      "Beautiful buildings can be found all over the world. From the pyramids of Egypt to the Taj Mahal, these structures are awe-inspiring. See some of the most beautiful buildings in the world.",
    user_id: user1.id
  )
file = URI.open("#{path}photo7.jpg")
photo7.photo.attach(io: file, filename: "photo7.jpg")

photo8 =
  Photo.create!(
    title: "Beautiful",
    description:
      "Tall buildings with beautiful art on top.  Most people would prefer to live in a tall building that is beautiful and has a lot of interesting artworks on it.",
    user_id: user1.id
  )
file = URI.open("#{path}photo8.jpg")
photo8.photo.attach(io: file, filename: "photo8.jpg")

photo9 =
  Photo.create!(
    title: "Amazing skyscrapers",
    description:
      "Tall Buildings are a part of our lives that we don't give much thought to. But they are an art form in their own right. Check out these amazing skyscrapers, church spires, and other architectural wonders.",
    user_id: user1.id
  )
file = URI.open("#{path}photo9.jpg")
photo9.photo.attach(io: file, filename: "photo9.jpg")

photo10 =
  Photo.create!(
    title: "Truly beautiful",
    description:
      "Tall buildings are beautiful. It's true. Some of the most famous and beautiful buildings in the world are towers. Learn about their history and design.",
    user_id: user1.id
  )
file = URI.open("#{path}photo10.jpg")
photo10.photo.attach(io: file, filename: "photo10.jpg")

photo11 =
  Photo.create!(
    title: "Architectural beauty",
    description:
      "Tall buildings are often the epitome of architectural beauty, and the tallest buildings in the world are certainly some of the most impressive and beautiful. Explore tall buildings from all over the world, from the pyramids of Egypt right up to the Petronas Towers of Kuala Lumpur.",
    user_id: user2.id
  )
file = URI.open("#{path}photo11.jpg")
photo11.photo.attach(io: file, filename: "photo11.jpg")

photo12 =
  Photo.create!(
    title: "A building I stumbled upon",
    description:
      "Explore the tallest buildings in the world, from the Burj Khalifa to the Willis Tower in Chicago.",
    user_id: user2.id
  )
file = URI.open("#{path}photo12.jpg")
photo12.photo.attach(io: file, filename: "photo12.jpg")

photo13 =
  Photo.create!(
    title: "Looking up",
    description:
      "A group of tall and beautiful buildings, mostly residential, towers over the city of Delhi and at night, they seem to glow. See more beautiful tall buildings.",
    user_id: user2.id
  )
file = URI.open("#{path}photo13.jpg")
photo13.photo.attach(io: file, filename: "photo13.jpg")

photo14 =
  Photo.create!(
    title: "Surrounded by beauty",
    description:
      "Buildings. The structures that house and support all of our lives. We live and work and play in them. Sometimes they are the most beautiful and sometimes they are the ugliest. This is a collection of photographs of some of the most beautiful buildings in the world.",
    user_id: user2.id
  )
file = URI.open("#{path}photo14.jpg")
photo14.photo.attach(io: file, filename: "photo14.jpg")

photo15 =
  Photo.create!(
    title: "Iconic",
    description:
      "A building can be as iconic as the Empire State Building or as mundane as a local library. And, like the Empire State Building, some of our most famous and beautiful buildings tell a story of a different time.",
    user_id: user2.id
  )
file = URI.open("#{path}photo15.jpg")
photo15.photo.attach(io: file, filename: "photo15.jpg")

photo16 =
  Photo.create!(
    title: "Yes",
    description:
      "Tall. Amazing. Glorious. Beautiful. These are some of the words used to describe the World Trade Center. The World Trade Center was a complex of two towers and four underground levels located in New York City's Lower Manhattan. The two towers, built on the site of the former Twin Towers,",
    user_id: user3.id
  )
file = URI.open("#{path}photo16.jpg")
photo16.photo.attach(io: file, filename: "photo16.jpg")

photo17 =
  Photo.create!(
    title: "Masterpiece",
    description:
      "A tall building is a building that rises a great height. The term is sometimes used more loosely to include spires, towers and other structures that are tall but not made of steel.",
    user_id: user3.id
  )
file = URI.open("#{path}photo17.jpg")
photo17.photo.attach(io: file, filename: "photo17.jpg")

photo18 =
  Photo.create!(
    title: "Masterpiece",
    description:
      "A collection of the world's best architectural masterpieces. ...",
    user_id: user3.id
  )
file = URI.open("#{path}photo18.jpg")
photo18.photo.attach(io: file, filename: "photo18.jpg")

photo19 =
  Photo.create!(
    title: "Some",
    description:
      "Here are some of the world's tallest, strangest, and greatest buildings. And then some.",
    user_id: user3.id
  )
file = URI.open("#{path}photo19.jpg")
photo19.photo.attach(io: file, filename: "photo19.jpg")

photo20 =
  Photo.create!(
    title: "Impressive",
    description:
      "This post shares some of my favorite images of tall, beautiful, amazing, lovely, impressive, artwork, and height.",
    user_id: user3.id
  )
file = URI.open("#{path}photo20.jpg")
photo20.photo.attach(io: file, filename: "photo20.jpg")

photo21 =
  Photo.create!(
    title: "Tall",
    description:
      "Tall, beautiful, amazing, lovely, impressed, artwork, height.",
    user_id: user4.id
  )
file = URI.open("#{path}photo21.jpg")
photo21.photo.attach(io: file, filename: "photo21.jpg")

comment1 = Comment.create!(body: "first", author_id: user1.id, photo_id: photo1.id)
comment2 = Comment.create!(body: "Impressive!!!!", author_id: user2.id, photo_id: photo1.id)
comment3 = Comment.create!(body: "I love it!", author_id: user3.id, photo_id: photo1.id)
comment4 = Comment.create!(body: "amazing photography", author_id: user4.id, photo_id: photo1.id)
comment5 = Comment.create!(body: "Thank you!", author_id: demo.id, photo_id: photo1.id)
comment6 = Comment.create!(body: "Much wow so amaze", author_id: demo.id, photo_id: photo2.id)
comment7 = Comment.create!(body: "I would give you two faves if I could", author_id: user1.id, photo_id: photo2.id)
comment8 = Comment.create!(body: "Same", author_id: user4.id, photo_id: photo2.id)
comment9 = Comment.create!(body: "Very nice", author_id: user2.id, photo_id: photo2.id)

user_id_bank = User.all.ids
body_bank = ["I love it!", "I looooove it!!", "Super amazing!", "You made it!",
             "I'm impressed", "super impressive", "I agree", "Your work is amazing!",
             "Your photography is amazing!", "I love buildings too", "That's really tall",
             "nice", "Woooooow", "Wow!", "Wowie", "Faved, thank you", "Faved", "Nice!",
             "That's really cool", "I can't believe my eyes!", "Really stunning",
             "Thank you for sharing", "Thanks for sharing", "You're amazing", "Niceeeee",
             "Much like", "Beautiful", "Impressive", "Thank you", "Nice!", "Super cool",
             "Your skills are nice", "Skillful", "Masterclass", "Masterpiece", "True masterpice",
             "How did you take this?", "What camera do you use?", "What camera?", "What camera settings?",
              "Can you share your camera settings", "Can you share your camera", "How did you take this?",
              "I wish my photography skills were as good as yours", "Nice, I can't wait to share mine too"
            ] 

Photo.all.each do |photo|
  author_ids = user_id_bank.sample(7);
  author_ids.each do |author_id|
    Comment.create!(body: body_bank.sample(), author_id: author_id, photo_id: photo.id)
  end
end

# Create Likes for each user on each photo
User.all.each do |user|
  Photo.all.each do |photo|
    Like.create!(user_id: user.id, photo_id: photo.id)
  end
end

# Create Tags on each photo
word_bank = ["tall", "amaze", "art", "artwork", "mesmerizing", "photo", 
        "photography", "wow", "amazing", "beautiful", "tallest", "buildings",
        "night", "day", "best", "stunned", "stunning", "super", "shocked", "architecture",
        "architectural", "beauty", "best", "woooooow", "dizzy", "shocking", "masterpiece",
        "image", "great", "greatest", "collection", "world", "iconic", "empire",
        "engineering", "future", "generational", "generations", "generation"
      ]

Photo.all.each do |photo|
  tags = word_bank.sample(10);
  tags.each do |tag|
    Tag.create!(body: tag, photo_id: photo.id)
  end
end

puts "Done!"
