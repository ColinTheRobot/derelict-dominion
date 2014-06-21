class Lot < ActiveRecord::Base
  has_many :comments
  has_many :users, through: :comments

  has_attached_file :photo1, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :photo1, :content_type => /\Aimage\/.*\Z/

  has_attached_file :photo2, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :photo2, :content_type => /\Aimage\/.*\Z/

  has_attached_file :photo3, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :photo3, :content_type => /\Aimage\/.*\Z/

  
end
