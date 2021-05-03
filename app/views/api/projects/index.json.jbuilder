json.projects do
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :body, :user_id

            json.user do
                json.extract! project.user, :username, :id
            end

            if project.photo.attached?
                json.photoUrl url_for(project.photo)
            else
                json.photoUrl nil
            end
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