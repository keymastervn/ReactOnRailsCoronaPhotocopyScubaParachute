class Api::V1::GuidesController < ApiController

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
    GuideService.new(guide_params)
  end

  private

  def guide_params
    params
      .permit(
        :searchValue
      )
  end
end
