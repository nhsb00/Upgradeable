class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :head, null:false
      t.integer :project_id
      t.text :description
      
      t.timestamps
    end
    add_index :steps, :project_id
  end
end
