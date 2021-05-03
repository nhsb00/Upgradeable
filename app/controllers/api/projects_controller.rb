class Api::ProjectsController < ApplicationController
    
    def index
        if params[:search]
            @projects = Project.search_by_title(params[:search])
        else
            @projects = Project.all
            render 'api/projects/index'
        end
    end

    def show
        @project = Project.find(params[:id])
        render 'api/projects/show'
    end

    def create
        @project = Project.new(project_params)
        @project.user_id = current_user.id
        # @project.user_id = params[:user_id]
        if @project.save
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        
        @project = Project.find(params[:id])
        if @project.update(project_params)
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def destroy
        @project = Project.find(params[:id])
        if @project
            @project.destroy
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    # def search
    #     search = "%" + params[:search].downcase + "%"
    #     @projects = Project.where("LOWER(title) like ?", search, search)
    #     redner :index
    # end

    private

    def project_params
        params.require(:project).permit(:title, :body, :id, :photo)
    end
end
