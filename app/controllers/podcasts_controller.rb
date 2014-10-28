class PodcastsController < ApplicationController
  
  def index
    
  end

  def create
    @podcast = Podcast.new(podcast_params.merge(:playlist_id => params[:playlist_id]))
    @playlist = Playlist.find(params[:playlist_id])
    respond_to do |format|
      if @podcast.save
        format.html {redirect_to playlist_path(@playlist)}
        format.json { render json: @podcast }
      else
        format.html { render :new }
        format.json { render status: 400, nothing: true}
      end
    end
  end

  private

  def podcast_params 
    params.require(:podcast).permit(:artist_name, :collection_name, :itunes_url, :image_url, :rss_url, :primary_genre)
  end
end