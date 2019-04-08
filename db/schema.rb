# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_08_080707) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guides", force: :cascade do |t|
    t.text "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guides_activities", force: :cascade do |t|
    t.bigint "guide_id"
    t.bigint "activity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_guides_activities_on_activity_id"
    t.index ["guide_id"], name: "index_guides_activities_on_guide_id"
  end

  create_table "guides_languages", force: :cascade do |t|
    t.bigint "guide_id"
    t.bigint "language_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guide_id"], name: "index_guides_languages_on_guide_id"
    t.index ["language_id"], name: "index_guides_languages_on_language_id"
  end

  create_table "languages", force: :cascade do |t|
    t.text "code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "score", null: false
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "guide_id"
    t.index ["guide_id"], name: "index_reviews_on_guide_id"
  end

  add_foreign_key "guides_activities", "activities"
  add_foreign_key "guides_activities", "guides"
  add_foreign_key "guides_languages", "guides"
  add_foreign_key "guides_languages", "languages"
  add_foreign_key "reviews", "guides"
end
