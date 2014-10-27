class Podcast < ActiveRecord::Base
  has_many :playlists
  has_many :comments 
end