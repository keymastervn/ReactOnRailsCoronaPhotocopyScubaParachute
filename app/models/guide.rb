class Guide < ApplicationRecord
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :activities, join_table: :guides_activities
  has_many :reviews

  validates_uniqueness_of :email
end
