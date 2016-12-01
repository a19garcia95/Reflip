class PropertiesController < ApplicationController
  before_action :set_property, only:[:analyze]

  def index

  end

  def show
    @property = Property.build_from_api(params[:address], params[:citystatezip])
  end

  def analyze
     #code
   end

   def results
     #code
   end

   def google_satellite_view
     #code
   end

   def give_us_your_feedback
     #code
   end


   private

   def set_property
     @property = Property.find(params[:id])
   end

end
