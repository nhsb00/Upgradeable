json.projects do
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :body, :user_id
        end
    end
end

json.users do
    @projects.each do |project|
        json.set! project.user.id do
            json.extract! project.user, :id, :username
        end
    end
end