require 'nokogiri'
require 'open-uri'
class Podcast < ActiveRecord::Base
  has_many :playlists
  has_many :comments 

  def self.parse_for_mpthree(rss_feed)
  	# doc = Nokogiri::XML(open('http://google.com').read)
		doc = Nokogiri::XML(open("#{rss_feed}").read)

		rss_array = []

		(0..10).each do |i|
			rss_array << doc.xpath('/rss/channel/item/enclosure/@url')[i].value
		end

		return rss_array
		
  end

end