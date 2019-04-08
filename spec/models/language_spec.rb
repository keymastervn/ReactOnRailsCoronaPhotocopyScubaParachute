require 'rails_helper'

RSpec.describe Language, type: :model do
  context "Check validations" do
    let!(:language) { FactoryBot.create(:language) }
    it { should validate_uniqueness_of(:code) }
  end
end
