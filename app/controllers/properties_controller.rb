class PropertiesController < ApplicationController

  def index

  end

  def show
    @address = params[:address].to_s.gsub(" ","+")
    @citystatezip = params[:citystatezip].to_s.gsub(" ", "+").gsub(/,/,"%2C")
    if (@address and @citystatezip)
      @zillow_api = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&address=#{@address}&citystatezip=#{@citystatezip}"
      @results = HTTParty.get(@zillow_api)
      @zillowId = @results["searchresults"]["response"]["results"]["result"]["zpid"]
      @lotSizeSqFt = @results["searchresults"]["response"]["results"]["result"]["lotSizeSqFt"]
      @finishedSqFt = @results["searchresults"]["response"]["results"]["result"]["finishedSqFt"]
      @bathrooms = @results["searchresults"]["response"]["results"]["result"]["bathrooms"]
      @bedrooms = @results["searchresults"]["response"]["results"]["result"]["bedrooms"]
      @lastSoldDate = @results["searchresults"]["response"]["results"]["result"]["lastSoldDate"]
      @lastSoldPrice = @results["searchresults"]["response"]["results"]["result"]["lastSoldPrice"]["__content__"]
      @estimate = @results["searchresults"]["response"]["results"]["result"]["zestimate"]["amount"]["__content__"]
      @valueChange30 = @results["searchresults"]["response"]["results"]["result"]["zestimate"]["valueChange"]["__content__"]
    end
  end

  def save

  end

  def create

  end

  def destroy

  end

end
