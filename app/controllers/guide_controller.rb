# frozen_string_literal: true

class GuideController < ApplicationController
  before_action :set_guide, only: :show
  before_action :set_review, only: :show

  layout "guide_management"

  def index
    @props = { guides: GuideService.new.all }
  end

  def show
    @props = {
      guide: @guide.as_json(
        only: [:id, :email],
        methods: [:display_languages, :display_activities]
      ),
      reviews: @reviews
    }
  end

  private

  def set_guide
    @guide = Guide.find(params[:id])
  end

  def set_review
    @reviews = @guide.reviews
  end

end
