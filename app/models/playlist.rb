class Playlist < ActiceRecord::Base
  belongs_to :user
  has_many :podcasts
end