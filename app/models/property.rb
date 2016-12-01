# **************M O D E L**************
class Property < ApplicationRecord
  belongs_to :user

  def self.build_from_api(address, citystatezip)
    return new if (address.empty? || citystatezip.empty?)
    address = address.to_s.gsub(" ","+")
    citystatezip = citystatezip.to_s.gsub(" ", "+").gsub(/,/,"%2C")
    zillow_api = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&address=#{address}&citystatezip=#{citystatezip}"
    results = HTTParty.get(zillow_api)["searchresults"]["response"]["results"]["result"]
    puts "==================================#{results}"

    zillow_id = results["zpid"].to_i
    street = results["address"]["street"]
    city = results["address"]["city"]
    state = results["address"]["state"]
    zipcode = results["address"]["zipcode"]
    latitude = results["address"]["latitude"]
    longitude = results["address"]["longitude"]
    sqft = results["finishedSqFt"].to_i
    bathrooms = results["bathrooms"].to_i
    bedrooms = results["bedrooms"].to_i
    estimate = results["zestimate"]["amount"]["__content__"].to_i
    valuechange = results["zestimate"]["valueChange"]["__content__"].to_i
    a = Property.new({estimate: estimate, zillow_id: zillow_id, street: street, city: city, state: state, zipcode: zipcode, latitude: latitude, longitude: longitude, sqft: sqft, baths:bathrooms, bedrooms: bedrooms, valuechange: valuechange})
    a.save(:validate => false)
    return a
    # create({estimate: estimate, zillow_id: zillow_id, street: street, city: city, state: state, zipcode: zipcode, latitude: latitude, longitude: longitude, sqft: sqft, baths:bathrooms, bedrooms: bedrooms, valuechange: valuechange})
  end

  def chart5year
    get_chart = "http://www.zillow.com/webservice/GetChart.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&unit-type=dollar&zpid=#{zillow_id}&width=600&height=300&chartDuration=5years"
    chart = HTTParty.get(get_chart)['chart']['response']['url']
  end

  def chart10year
    get_chart = "http://www.zillow.com/webservice/GetChart.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&unit-type=dollarx&zpid=#{zillow_id}&width=600&height=300&chartDuration=10years"
    chart = HTTParty.get(get_chart)['chart']['response']['url']
  end

  def comparibles
    second_zillow_api = "http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&zpid=#{zillow_id}&count=#{10}"
    comparables = HTTParty.get(second_zillow_api)["comps"]["response"]["properties"]["comparables"]["comp"]
  end



end
