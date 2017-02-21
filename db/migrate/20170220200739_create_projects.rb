class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :short_description
      t.text :description
      t.string :icon
      t.string :tags, array: true, default: []
    end
  end
end
