class Guide < ApplicationRecord
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :activities, join_table: :guides_activities
  has_many :reviews

  validates_uniqueness_of :email

  def display_languages
    languages.collect(&:code).join(", ")
  end

  def display_activities
    activities.collect(&:name).join(", ")
  end
end
