json.project do
    json.extract! @project, :id, :title, :body, :user_id
end

json.user do
    json.extract! @project.user, :id, :username
end
