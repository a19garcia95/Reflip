class ChargesController < ApplicationController
  def create
      @research = Research.find(params[:book_id])

      # Amount is in cents
      @amount = @research.price
      @amount = @amount.to_i

      customer = Stripe::Customer.create(
        :email => params[:stripeEmail],
        :source  => params[:stripeToken]
      )

      charge = Stripe::Charge.create(
        :customer    => customer.id,
        :amount      => @amount,
        :description => @research.title,
        :currency    => 'usd'
      )
  end
end
