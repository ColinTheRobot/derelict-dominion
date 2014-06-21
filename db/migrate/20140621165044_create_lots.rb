class CreateLots < ActiveRecord::Migration
  def change
    create_table :lots do |t|
      t.string :address
      t.string :borough
      t.integer :zipcode
      t.string :agency_owner
      t.integer :area_sq_feet
      t.integer :area_acres
      t.float :latitude
      t.float :longitude
      t.text :description
      t.boolean :is_vacant

      t.timestamps
    end
  end
end
