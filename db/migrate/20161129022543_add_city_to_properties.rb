class AddCityToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :city, :string
  end
end
