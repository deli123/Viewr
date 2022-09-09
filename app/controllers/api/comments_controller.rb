class Api::CommentsController < ApplicationController
    wrap_parameters include: Comment.attribute_names

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        unless @comment
          render json: { message: 'Unauthorized' }, status: :unauthorized
          return
        end
        @comment.destroy
        render :show
      end

    private

    def comment_params
        params.require(:comment).permit(:body, :author_id, :photo_id)
    end

end
