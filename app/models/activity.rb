class Activity < ApplicationRecord
  has_and_belongs_to_many :guides, join_table: :guides_activities

  validates_uniqueness_of :name
end
