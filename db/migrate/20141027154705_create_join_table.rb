class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :playlists, :podcasts do |t|
      t.index [:playlist_id, :podcast_id]
      t.index [:podcast_id, :playlist_id]
    end
  end
end
