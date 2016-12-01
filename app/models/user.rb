# **************M O D E L**************
class User < ApplicationRecord
  has_secure_password
  has_many :properties
end
