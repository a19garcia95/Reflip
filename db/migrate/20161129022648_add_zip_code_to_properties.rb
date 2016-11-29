class AddZipCodeToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :zipcode, :string
  end
end
