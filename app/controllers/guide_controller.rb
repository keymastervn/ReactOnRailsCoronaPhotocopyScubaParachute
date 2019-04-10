# frozen_string_literal: true

class GuideController < ApplicationController
  layout "guide_management"

  def index
    @props = { name: "Stranger" }
  end
end
