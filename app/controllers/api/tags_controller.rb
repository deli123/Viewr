class Api::TagsController < ApplicationController
  wrap_parameters include: Tag.attribute_names

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    unless @tag
      render json: { message: "Unauthorized" }, status: :unauthorized
      return
    end
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:id, :body, :photo_id)
  end
end
