class CreatePodcasts < ActiveRecord::Migration
  def change
    create_table :podcasts do |t|
      t.string :name
      t.string :url
      t.string :category
      t.references :playlist, index: true
    end
  end
end
