class ProfileController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @profile = Profile.find(params[:id])
    render json: @profile
  end

  # alternatively, can just find @profile here like we do
  # in the other methods....
  # but we're doing it this way to show lifecycle methods
  def view
    @id = params[:id].to_i
  end

  def update_bio
    @profile = Profile.find(params[:id])
    if @profile
      @profile.bio = params[:bio]
      @profile.save
      render json: @profile
    end
  end
end
