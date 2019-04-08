# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sample_f_names = ['le', 'nguyen', 'vo', 'tran', 'ly', 'trieu', 'dinh', 'hoang']
sample_m_names = ['van', 'vo', 'tien', 'hong', 'trung', 'thi']
sample_names = ['dat', 'hoang', 'giang', 'thanh', 'tuan', 'truong', 'thi', 'chien', 'minh', 'truong', 'tien', 'dung']
mail_providers = ['yahoo.com', 'google.com', 'kenh14.vn', 'vnexpress.net', 'now.vn', 'foody.vn', 'coffee.vn']

email_generate = -> (a,b,c,d) { "#{a.sample}.#{b.sample}_#{c.sample}#{rand(101..1231)}@#{d.sample}"}

100.times do
  Guide.find_or_create_by(email: email_generate.call(sample_f_names, sample_m_names, sample_names, mail_providers))
end

# Language
Language.find_or_create_by(code: 'jp')
Language.find_or_create_by(code: 'vn')
Language.find_or_create_by(code: 'en')
Language.find_or_create_by(code: 'kr')

# Activity
Activity.find_or_create_by(name: 'swimming')
Activity.find_or_create_by(name: 'hunting')
Activity.find_or_create_by(name: 'shooting')
Activity.find_or_create_by(name: 'dancing')
Activity.find_or_create_by(name: 'cooking')

Guide.all.each {|g|
  1..(rand(1..5)).times do
    l = Language.find rand(1..(Language.count))
    a = Activity.find rand(1..(Activity.count))

    g.languages << l unless g.languages.collect(&:code).include? l.code
    g.activities << a unless g.activities.collect(&:name).include? a.name
  end
}

# No one speak russian
Language.find_or_create_by(code: 'ru')
