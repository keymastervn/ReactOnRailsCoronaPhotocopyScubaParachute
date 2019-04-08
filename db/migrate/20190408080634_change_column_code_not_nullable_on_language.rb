class ChangeColumnCodeNotNullableOnLanguage < ActiveRecord::Migration[5.2]
  def change
    change_column_null :languages, :code, false
  end
end
