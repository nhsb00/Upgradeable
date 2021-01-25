class EditProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :category_id
  end
end
