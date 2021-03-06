class Comment < ApplicationRecord
    validates :user_id, :project_id, :content, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :project,
        foreign_key: :project_id,
        class_name: :Project
end
