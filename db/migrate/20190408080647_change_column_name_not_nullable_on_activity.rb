class ChangeColumnNameNotNullableOnActivity < ActiveRecord::Migration[5.2]
  def change
    change_column_null :activities, :name, false
  end
end
