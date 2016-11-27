class CreateProperties < ActiveRecord::Migration[5.0]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :citystatezip
      t.integer :sqft
      t.integer :baths
      t.integer :bedrooms
      t.integer :estimate
      t.integer :valuechange

      t.timestamps
    end
  end
end
