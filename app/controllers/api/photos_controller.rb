class Api::PhotosController < ApplicationController
    wrap_parameters include: Photo.attribute_names + [:photo]

    def index
        @photos = Photo.all
        @user = current_user.id
        render :index
    end

    def show
        @photo = Photo.find(params[:id])
        @likes = {
            count: @photo.likes.count,
            liked: Like.where("user_id = ? AND photo_id = ?", current_user.id, @photo.id).count != 0 ? true : false,
            id: Like.where("user_id = ? AND photo_id = ?", current_user.id, @photo.id).pluck(:id)[0],
            photo_id: @photo.id
        }
        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy
        @photo = Photo.find(params[:id])
         unless @photo
            render json: { message: "Unauthorized" }, status: :unauthorized
            return
        end
        @photo.destroy
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :user_id, :album_id, :photo)
    end
end
