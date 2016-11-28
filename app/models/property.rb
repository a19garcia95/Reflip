class Property < ApplicationRecord
  def self.create_from_temp_property(temp_prop, user_id)
    create(estimate: temp_prop.estimate, user_id: user_id)
  end


# api_results params[:address], params[:citystatezip]
  def api_results(address, citystatezip)
    # @address = params[:address].to_s.gsub(" ","+")
     @address = address.to_s.gsub(" ","+")

    # @citystatezip = params[:citystatezip].to_s.gsub(" ", "+").gsub(/,/,"%2C")
    @citystatezip = citystatezip.to_s.gsub(" ", "+").gsub(/,/,"%2C")
    if (@address and @citystatezip)
      @zillow_api = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&address=#{@address}&citystatezip=#{@citystatezip}"
      @results = HTTParty.get(@zillow_api)

  end

  def estimate(results)
    estimate = results["searchresults"]["response"]["results"]["result"]["zestimate"]["amount"]["__content__"]
  end
end
