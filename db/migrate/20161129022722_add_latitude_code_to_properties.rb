class AddLatitudeCodeToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :latitude, :string
  end
end
