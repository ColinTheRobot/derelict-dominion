class LotsController < ApplicationController

def index
  @lots = Lot.all
end

def show
  @lot = Lot.find params[:id]
end

def edit

end

def new
  @lot = Lot.new
end

def create
  @lot = Lot.create lot_params
  redirect_to root_path
end

def destroy

end

private

def lot_params
  params.require(:lot).permit(:address, :borough, :zipcode, :agency_owner, :area_sq_feet, :area_acres, :latitude, :longitude, :description, :is_vacant, :photo1)
end



end
