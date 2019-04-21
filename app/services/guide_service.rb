class GuideService
  attr_accessor :params

  def initialize(options = {})
    self.params = options
  end

  def all
    serialize Guide
      .includes(:languages, :activities)
      .all
  end

  def search
    result = Guide.includes(:languages, :activities)

    if params[:searchValue].present?
      search = "%#{params[:searchValue]}%"
      result = result.where('email ILIKE ?', search)
    end

    result = serialize result

    {
      draw: params[:draw] || 1,
      page: params[:page] || 1,
      per_page: params[:perPage] || 10,
      sort_field: params[:sortField],
      sort_direction: params[:sortDirection] || "asc",
      search_value: params[:searchValue] || "",
      total: result.count,
      result: result
    }
  end

  def serialize result
    result.as_json(
      only: [:id, :email],
      methods: [:display_languages, :display_activities]
    )
  end
end