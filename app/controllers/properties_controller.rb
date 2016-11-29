class PropertiesController < ApplicationController

  def index

  end

  def show
    @property = Property.build_from_api(params[:address], params[:citystatezip])
  end

  def save

  end

  def create

  end

  def destroy

  end

end
