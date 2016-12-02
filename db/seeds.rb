# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
a = Person.new(email: 'fake@email.com', password: 'f3p48fdpas3')
a.save
b = ChatRoom.new(title: 'title', person_id: a.id)
b.save
c = Message.new(body: 'body', person_id: a.id, chat_room: b)
c.save
