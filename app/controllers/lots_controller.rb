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
  @lot = Lot.create lot_params
end

def destroy

end

private

def lot_params
  params.require(:lot).permit(:address, :borough, :zipcode, :agency_owner, :area_sq_feet, :area_acres, :latitude, :longitude, :description, :is_vacant)
end



end
