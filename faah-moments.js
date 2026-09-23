// ---------------------------------------------------------------------------
// Hirushan D Live — "Faah Moments" soundboard button
// Self-contained: wires up #faahBtn to play the one-shot sound effect.
// Edit ONLY this file to change the sound clip or button behavior.
// ---------------------------------------------------------------------------
(function () {
  var SOUND_URL = 'https://www.myinstants.com/media/sounds/fahhhhh.mp3';

  function init() {
    var btn = document.getElementById('faahBtn');
    if (!btn) return;

    var sfx = new Audio(SOUND_URL);
    sfx.preload = 'none';

    btn.addEventListener('click', function () {
      sfx.currentTime = 0;
      sfx.play().catch(function (err) {
        console.error('Faah Moments playback failed:', err);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
