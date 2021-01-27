class Project < ApplicationRecord
    validates :user_id, :title, presence:true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :steps,
        foreign_key: :project_id,
        class_name: :Step
    
end
