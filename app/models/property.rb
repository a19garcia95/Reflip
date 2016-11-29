class Property < ApplicationRecord

  def self.build_from_api(address, citystatezip)
    return new if (address.empty? || citystatezip.empty?)
    address = address.to_s.gsub(" ","+")
    citystatezip = citystatezip.to_s.gsub(" ", "+").gsub(/,/,"%2C")
    zillow_api = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&address=#{address}&citystatezip=#{citystatezip}"
    results = HTTParty.get(zillow_api)["searchresults"]["response"]["results"]["result"]

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


    create({estimate: estimate, zillow_id: zillow_id, street: street, city: city, state: state, zipcode: zipcode, latitude: latitude, longitude: longitude, sqft: sqft, baths:bathrooms, bedrooms: bedrooms, valuechange: valuechange})
  end

  def chart
    get_chart = "http://www.zillow.com/webservice/GetChart.htm?zws-id=X1-ZWz19hai5nqayz_6ttia&unit-type=percent&zpid=#{zillow_id}&width=300&height=150"
    chart = HTTParty.get(get_chart)
  end



end
