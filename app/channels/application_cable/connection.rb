module ApplicationCable
 class Connection < ActionCable::Connection::Base
   identified_by :current_person

   def connect
     self.current_person = find_verified_person
     logger.add_tags 'ActionCable', current_person.email
   end

   protected

   def find_verified_person # this checks whether a person is authenticated with devise
     require 'pp'
    #  pp env
     if verified_person = env['warden'].user
       verified_person
     else
       reject_unauthorized_connection
     end
   end
 end
end
