class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.find(params[:id])
        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: photo.errors.full_messages, status: 422
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :user_id, :album_id)
    end
end
