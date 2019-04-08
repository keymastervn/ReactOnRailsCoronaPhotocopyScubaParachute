require 'rails_helper'

RSpec.describe Activity, type: :model do

  context "Check validations" do
    let!(:activity) { FactoryBot.create(:activity) }
    it { should validate_uniqueness_of(:name) }
  end
end
