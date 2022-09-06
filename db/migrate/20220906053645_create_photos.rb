class CreatePhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :description
      t.references :user, null: false
      t.references :album
      t.timestamps
    end

    add_index :photos, [:id, :album_id], unique: true
  end
end
