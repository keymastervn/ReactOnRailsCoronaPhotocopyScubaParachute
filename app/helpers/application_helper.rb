module ApplicationHelper

  def universal_cache_key
    Rails.cache.fetch("It will be fu*king simple for using 2 cache layers", expires_in: 3.seconds ) do
      [
        Guide,
        Language,
        Activity,
        GuidesActivity,
        GuidesLanguage
      ].map{|x| x.all.cache_key }.join("|")
    end
  end
end
