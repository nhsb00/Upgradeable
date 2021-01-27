json.steps do
    @steps.each do |step|
        json.set! step.id do
            json.extract! step, :id, :head, :description, :project_id
        end
    end
end