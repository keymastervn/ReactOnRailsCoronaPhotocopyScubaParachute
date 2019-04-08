class ChangeColumnEmailNotNullableOnGuide < ActiveRecord::Migration[5.2]
  def change
    change_column_null :guides, :email, false
  end
end
