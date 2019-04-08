class AddGuideRefToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :guide, index: true
    add_foreign_key :reviews, :guides
  end
end
