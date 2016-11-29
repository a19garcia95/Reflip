class AddStreetToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :street, :string
  end
end
