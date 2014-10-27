class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :name
      t.string :web_url
      t.string :audio_url
      t.string :category
      t.references :playlist, index: true

      t.timestamps
    end
  end
end
