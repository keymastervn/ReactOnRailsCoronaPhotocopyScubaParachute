class GuideService
  include ApplicationHelper
  attr_accessor :params

  CACHE_DURATION = 12.hours

  def initialize(options = {})
    self.params = options
  end

  def all
    Rails.cache.fetch(params_cache_key + __method__.to_s, expires_in: CACHE_DURATION) do
      serialize Guide
        .includes(:languages, :activities)
        .all
    end
  end

  def search
    Rails.cache.fetch(params_cache_key + __method__.to_s, expires_in: CACHE_DURATION) do
      result = Guide

      if params[:searchValue].present?
        result = get_search_result params[:searchValue]
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
  end

  def serialize result
    result.as_json(
      only: [:id, :email],
      methods: [:display_languages, :display_activities]
    )
  end

  private

  def get_search_result search_value
    search_value.include?(":") ? partially_search(search_value) : standard_search(search_value)
  end

  def partially_search search_value
    queries = []
    params = []
    search_value.split(" ").each do |term|
      key, value = term.split ":"

      queries << "#{key} ILIKE ?"
      params << "%#{value}%"
    end

    ids = Guide.joins(:languages, :activities).where(queries.join(" AND "), *params).collect(&:id).uniq
    Guide.includes(:languages, :activities).where(id: ids)
  end

  def standard_search search_value
    Guide.includes(:languages, :activities).where('email ILIKE ?', "%#{search_value}%")
  end

  def params_cache_key
    universal_cache_key + params.to_s
  end

end