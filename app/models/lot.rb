class Lot < ActiveRecord::Base
  has_many :comments
  has_many :users, through: :comments

  has_attached_file :photo1,
    :storage => :s3,
    :url => ":s3_domain_url",
    :path => "/:class/:attachment/:id_partition/:style/:filename",
    :s3_credentials => Proc.new{|a| a.instance.s3_credentials },
    :styles => {
      :medium => "300x300>",
      :thumb => "100x100>"
    },
      :default_url => "http://placeimg.com/500/500/arch"
  validates_attachment_content_type :photo1, :content_type => /\Aimage\/.*\Z/

  validates :address, :borough, presence: true

  def s3_credentials
    {:bucket => ENV['BUCKET'], :access_key_id => ENV['AWS_ACCESS_KEY_ID'], :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']}
  end

  # def self.get_zipcode(latitude, longitude)
  #   Geocoder.search("#{latitude},#{longitude}").first.data['address_components'].last['long_name']
  # end

  # def self.get_address(latitude, longitude)
  #   Geocoder.search("#{latitude},#{longitude}").first.data['formatted_address']
  # end

  def self.get_coordinates(address)
    Geocoder.coordinates(address)
  end

end
