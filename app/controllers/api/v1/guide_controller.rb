class Api::V1::GuidesController < Api::V1::BaseController

  # GET /api/v1/guides/index.json
  def index
    @data = guide_service.all
  end

  # GET /api/v1/guides/search
  def search
    @data = guide_service.search
  end

  protected

  def guide_service
    GuideService.new(params)
  end
end
