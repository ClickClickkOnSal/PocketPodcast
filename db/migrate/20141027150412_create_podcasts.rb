class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :artist_name
      t.string :collection_name
      t.string :itunes_url
      t.string :image_url
      t.string :rss_url
      t.string :primary_genre
      t.references :playlist, index: true

      t.timestamps
    end
  end
end
