class PlaylistsController < ApplicationController

  def index
    
  end

  def create
    @playlist = Playlist.new(playlist_params.merge(user_id: current_user.id))
    respond_to do |format|
      if @playlist.save
        format.html {redirect_to root_path}
        format.json { render json: @playlist }
      else
        format.html { render :new }
        format.json { render status: 400, nothing: true }
      end
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end
  
end

