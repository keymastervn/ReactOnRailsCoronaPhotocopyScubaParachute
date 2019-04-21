# frozen_string_literal: true

class GuideController < ApplicationController
  before_action :set_guide, only: :show

  layout "guide_management"

  def index
    @props = { guides: GuideService.new.all }
  end

  def show
    @props = { guide: @guide }
  end

  private

  def set_guide
    @guide = Guide.find(params[:id])
  end

end
