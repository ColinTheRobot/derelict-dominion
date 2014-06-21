class LotsController < ApplicationController

  def index
    @lots = Lot.all
  end

  def show

  end

  def edit

  end

  def new
    @lot = Lot.new
  end

  def create
   binding.pry
   @lot = Lot.new
   coordinates = Lot.get_coordinates(params["lot"]["address"])
   if @lot.save
      @lot.update(
        address: params["lot"]["address"],
        borough: params["lot"]["borough"],
        zipcode: params["lot"]["zipcode"],
        agency_owner: params["lot"]["agency_owner"],
        area_sq_feet: params["lot"]["area_sq_feet"],
        area_acres: params["lot"]["area_acres"],
        latitude: coordinates[0],
        longitude: coordinates[1],
        description: params["lot"]["description"]
      )
    end
    redirect_to root_path
  end

  def destroy

  end

end
