class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :user, foreign_key: { to_table: :users }, null: false
      t.references :photo, foreign_key: { to_table: :photos }, null: false
      t.timestamps
    end
  end
end
