class Api::PhotosController < ApplicationController
    wrap_parameters include: Photo.attribute_names + [:photo, :query]
    before_action :set_photo, only: [:show, :update]

    def index
        @photos = Photo.all
        @user = current_user.id
        render :index
    end

    def show
        render :show
    end

    def create
        @photo = Photo.new(photo_params)
        @likes = {
            count: @photo.likes.count,
            liked: Like.where("user_id = ? AND photo_id = ?", current_user.id, @photo.id).count != 0 ? true : false,
            id: Like.where("user_id = ? AND photo_id = ?", current_user.id, @photo.id).pluck(:id)[0],
            photo_id: @photo.id
        }
        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        if @photo.update(photo_params)
            render :show
        else
          render json: @photo.errors.full_messages, status: :unprocessable_entity
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

    def search
        query = params[:query]
        @photos = Photo.joins(:tags, :user).where("body ILIKE ? OR title ILIKE ? OR fname ILIKE ? OR lname ILIKE ?", "%#{query}%", "%#{query}%", "%#{query}%", "%#{query}%")
        if @photos.length > 0
            render :index
        else
            render json: {}
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:id, :title, :description, :user_id, :album_id, :photo)
    end

    def set_photo
        @photo = Photo.find(params[:id])
        @likes = {
            count: @photo.likes.count,
            liked: Like.where("user_id = ? AND photo_id = ?", current_user.id, @photo.id).count != 0 ? true : false,
            id: Like.where("user_id = ? AND photo_id = ?", current_user.id, @photo.id).pluck(:id)[0],
            photo_id: @photo.id
        }
    end
end
