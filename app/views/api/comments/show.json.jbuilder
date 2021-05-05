json.user do 
    json.extract! @comment.user, :id, :username
end

json.comment do
    json.extract! @comment, :id, :user_id, :project_id, :content
    
    json.user do 
        json.extract! @comment.user, :id, :username
    end
end

json.project do 
    json.extract! @comment.project, :id, :title
end
