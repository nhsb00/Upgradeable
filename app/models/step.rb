class Step < ApplicationRecord
    validates :project_id, :head, :description, presence:true

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Step

end
