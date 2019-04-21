class ProgrammingLanguageService

  def initialize(options = {})
    @params = params
  end

  def self.not_used
    new.all.select{ |x| x.guides.blank? }
  end

  protected

  # class-wide
  def all
    @@all ||= Language.all
  end
end
