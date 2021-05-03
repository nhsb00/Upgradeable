class Project < ApplicationRecord
    validates :user_id, :title, presence:true

    # validate :ensure_photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :steps,
        foreign_key: :project_id,
        class_name: :Step

    has_many :comments,
        foreign_key: :project_id,
        class_name: :Comment
        
    has_one_attached :photo

    def self.search_by_title(title)
        projects = Project.arel_table
        Project.where(projects[:title].matches("%#{title}%"))
    end

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "Must be attached"
    # end
end
