// Métodos de propiedad
const player = {
  play: function(id) {
    console.log("playing song...", id);
  },

  pause: function(id) {
    console.log(`Paused..., ${id}`);
  },

  delete: function(id) {

  }
};

console.log(player);
player.play(217);
player.play(217);
player.pause(217);