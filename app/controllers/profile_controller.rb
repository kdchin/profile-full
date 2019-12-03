class ProfileController < ApplicationController
skip_before_action :verify_authenticity_token
  def show
    @profile = Profile.find(params[:id])
    render json: @profile
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
