class ChangeColumnNameFromUserIdToPersonId < ActiveRecord::Migration[5.0]
  def change
    rename_column :chat_rooms, :user_id, :person_id
  end
end
