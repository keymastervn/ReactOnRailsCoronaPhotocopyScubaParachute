class CreateGuidesLanguages < ActiveRecord::Migration[5.2]
  def change
    create_table :guides_languages do |t|
      t.references :guide, foreign_key: true
      t.references :language, foreign_key: true

      t.timestamps
    end
  end
end
