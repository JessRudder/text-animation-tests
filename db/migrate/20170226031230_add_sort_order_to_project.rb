class AddSortOrderToProject < ActiveRecord::Migration
  def change
    add_column :projects, :sort_order, :integer
  end
end
