class Api::CommentsController < ApplicationController

    def index 
        @comments = Project.find(params[:project_id]).comments
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

   def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end 

    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render json: ['Could not find comment'], status: 400
        end
    end


    private

    def comment_params
        params.require(:comment).permit(:id, :user_id, :project_id, :content)
    end
end
