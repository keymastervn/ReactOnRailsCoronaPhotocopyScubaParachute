class CreateGuidesActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :guides_activities do |t|
      t.references :guide, foreign_key: true
      t.references :activity, foreign_key: true

      t.timestamps
    end
  end
end
