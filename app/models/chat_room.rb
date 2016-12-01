class ChatRoom < ApplicationRecord
  belongs_to :person
  has_many :messages, dependent: :destroy
end
