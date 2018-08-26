Object.assing({}, playlist, {names: "sampleSong"})


function updatePlaylist(playlist, name, song){
  playlist[name] = song
}

function removeFromPlaylist(playlist, name, song){
  delete playlist[name]
  
}