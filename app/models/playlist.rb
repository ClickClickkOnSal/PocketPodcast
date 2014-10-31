class Playlist < ActiveRecord::Base
  belongs_to :user
  has_many :podcasts, dependent: :destroy

  validates :name, :presence => true
end