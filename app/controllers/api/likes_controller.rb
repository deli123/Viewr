class Api::LikesController < ApplicationController
  wrap_parameters include: Like.attribute_names

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    unless @like
      render json: { message: "Unauthorized" }, status: :unauthorized
      return
    end
    @like.destroy
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:id, :user_id, :photo_id)
  end
end
