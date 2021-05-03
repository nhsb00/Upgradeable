json.project do
    json.extract! @project, :id, :title, :body, :user_id

    if @project.photo.attached?
        json.photoUrl url_for(@project.photo)
    else
        json.photoUrl nil
    end

    json.user do
        json.extract! @project.user, :username, :id
    end
end

# json.photoUrls @project.photo.map { |file| url_for(file) }

json.user do
    json.extract! @project.user, :id, :username
end
