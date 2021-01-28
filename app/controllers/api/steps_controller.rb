class Api::StepsController < ApplicationController
    
    def index 
        @steps = Project.find(params[:project_id]).steps
        render 'api/steps/index'
    end

    def show
        @step = Step.find(params[:id])
        render 'api/steps/show'
    end

    def create
        @step = Step.new(step_params)
        @step.project_id = params[:project_id]
        if @step.save
            render 'api/steps/show'
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    def update
        @step = Step.find(params[:id])
        if @step.update(step_params)
            render 'api/steps/show'
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    def destroy
        @step = Step.find(params[:id])
        if @step
            @step.destroy
            render 'api/steps/show'
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    private

    def step_params
        params.require(:step).permit(:head, :description, :id, :project_id)
    end
end
