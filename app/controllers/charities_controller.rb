class CharitiesController < ApplicationController
    def index 
        charity = Charity.all
        render json: charity
    end

    def create
        charity = Charity.create(user_params)
        render json: charity
    end

    private

    def user_params
        params.permit(:name, :license, :description, :email, :image)
    end

end
