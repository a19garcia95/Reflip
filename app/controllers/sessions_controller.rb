class SessionsController < ApplicationController
  def show
   @opentok = OpenTok::OpenTok.new('45728832', 'cfdc084f981cd5167065628223ab799a5d359e77')
   @session_id = @opentok.create_session.session_id
   @api_key = '45728832'
   @token = @opentok.generate_token(@session_id)
  end
end
