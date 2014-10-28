class PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.where(user_id: current_user.id) if user_signed_in?
    respond_to do |format|
      format.html
      format.json {render json: @playlists}
    end
  end

  def show
    @playlist = Playlist.find(params[:id])  
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

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy

    redirect_to playlists_url, notice: "Playlist succesfully deleted."
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end
  
end

