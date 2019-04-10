json.array! @guides do |g|
  json.id g.id
  json.email g.email
  json.created_at g.created_at

  json.languages g.languages do |l|
    json.id l.id
    json.code l.code
  end

  json.activities g.activities do |a|
    json.id a.id
    json.name a.name
  end
end
