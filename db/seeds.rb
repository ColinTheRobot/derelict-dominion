# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
CSV.parse(File.read('lib/assets/596-data.csv')) do |row|
  x = Lot.new(address: row[0], borough: row[1], zipcode: row[2], agency_owner: row[3], area_sq_ft: row[4], area_acres: row[5], is_vacant: row[6], latitude: row[7], longitude: row[8] )
  x.save
end

