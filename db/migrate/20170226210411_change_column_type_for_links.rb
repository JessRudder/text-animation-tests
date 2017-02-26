class ChangeColumnTypeForLinks < ActiveRecord::Migration
  def change
    change_column :projects, :urls, :text
  end
end
