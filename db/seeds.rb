# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Photo.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
  end

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  demo =
    User.create!(
      fname: "Guest",
      lname: "User",
      username: "demouser",
      email: "demo@user.io",
      password: "password"
    )

  user1 =
    User.create!(
      fname: "Candance",
      lname: "Wolf",
      username: "wolfie",
      email: "wolfie@greenfelder.co",
      password: "password"
    )

  user2 =
    User.create!(
      fname: "Joseph",
      lname: "Batz",
      username: "josephbatz",
      email: "sol@crona-deckow.co",
      password: "password"
    )

  user3 =
    User.create!(
      fname: "Shawana",
      lname: "Jones",
      username: "shawana",
      email: "shawana@mohr.biz",
      password: "password"
    )

  user4 =
    User.create!(
      fname: "Marine",
      lname: "Johnson",
      username: "marinejohnson",
      email: "marinejohnson@mertz.net",
      password: "password"
    )

  path = "https://viewr-dev.s3.us-west-1.amazonaws.com/"

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

  photo10 =
    Photo.create!(
      title: "Truly beautiful",
      description:
        "Tall buildings are beautiful. It's true. Some of the most famous and beautiful buildings in the world are towers. Learn about their history and design.",
      user_id: user1.id
    )
  file = URI.open("#{path}photo10.jpg")
  photo10.photo.attach(io: file, filename: "photo10.jpg")

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

  puts "Done!"
end
