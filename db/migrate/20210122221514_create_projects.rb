class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id, null:false
      t.integer :category_id, null:false
      t.string :title, null:false
      t.text :body, null:false

      t.timestamps
    end
      add_index :projects, :user_id
      add_index :projects, :category_id
      add_index :projects, :title
  end
end
