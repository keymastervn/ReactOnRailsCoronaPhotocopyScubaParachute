require 'rails_helper'

RSpec.describe Guide, type: :model do
  context "Check validations" do
    let!(:guide) { FactoryBot.create(:guide) }
    it { should validate_uniqueness_of(:email) }
  end
end
