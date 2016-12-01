class MessagesController < ApplicationController
 before_action :set_chat_room, only: [:create]

 def create
   @message = @chat_room.messages.new(message_params)
   @message.user = current_user

   if @message.save
     redirect_to @chat_room
   end
   p @message.errors.messages
 end

 private
 def message_params
   params.require(:message).permit(:body)
 end

 def set_chat_room
   @chat_room = ChatRoom.find(params[:chat_room_id])
 end
end
