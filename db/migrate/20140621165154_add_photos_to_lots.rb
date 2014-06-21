class AddPhotosToLots < ActiveRecord::Migration
  def self.up
    add_attachment :lots, :photo1
    add_attachment :lots, :photo2
    add_attachment :lots, :photo3
  end

  def self.down
    remove_attachment :lots, :photo1
    remove_attachment :lots, :photo2
    remove_attachment :lots, :photo3
  end
end
