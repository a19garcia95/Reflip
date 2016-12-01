class UsersController < ApplicationController

  def index

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      Property.last.update(user_id: @user.id)
      redirect_to root_path, notice: 'Created user'
    else
      return render action: 'new'
    end
  end

  def show

  end

  private

  def user_params
    params.require(:user).
    permit(:username,
    :password,
    :password_confirmation)
  end


end
