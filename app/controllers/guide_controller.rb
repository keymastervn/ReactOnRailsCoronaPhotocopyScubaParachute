# frozen_string_literal: true

class GuideController < ApplicationController
  layout "guide_management"

  FIELDs = {
    guide: "email",
    language: "code",
    activity: "name"
  }

  def index
    @props = { name: "Stranger", fields: FIELDs, ajax: search_api_v1_guides_path }
    redux_store("guideStore", props: @props)
  end
end
