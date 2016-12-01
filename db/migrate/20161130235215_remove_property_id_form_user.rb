class RemovePropertyIdFormUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :property_id
  end
end
