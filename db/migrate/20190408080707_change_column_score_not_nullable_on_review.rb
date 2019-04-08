class ChangeColumnScoreNotNullableOnReview < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :score, false
  end
end
