json.draw @data.draw,
json.page @data.page,
json.perPage @data.per_page,
json.totalRecords @data.total
json.sortField @data.sort_field,
json.sortDirection @data.sort_direction,
json.searchValue @data.search_value

json.data @data.result, :id, :email
