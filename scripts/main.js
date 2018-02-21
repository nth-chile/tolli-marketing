jQuery(function($) { // DOM is now ready and jQuery's $ alias sandboxed


  // window.addEventListener( 'scroll', function() { eventThrottler(scrollHandler) }, false )
  // window.addEventListener( 'resize', function() { eventThrottler(resizeHandler) }, false )
  //
  // function scrollHandler() {
  //
  // }
  //
  // function resizeHandler() {
  //
  // }


// Modal boxes

  if (modalIds.length) {
    modalIds.forEach(function(id) {
      var modal = document.getElementById('modal-' + id)
      var btn = document.getElementById('modal-btn-' + id)
      var span = document.getElementById('modal-close-' + id)
      var player = document.getElementById('player-' + id)

      console.log(modal, btn, span, player)

      $('#modal-' + id + ' .modal-content').slideUp(400)


      $('#modal-btn-' + id + ', #staff-members__image-' + id).click(function() {
        modal.style.display = "block"
          if (embedCode && player) {
            player.innerHTML = embedCode
          }
        $('#modal-' + id + ' .modal-content').slideDown(400)

        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none"
              $('#modal-' + id + ' .modal-content').slideUp(400)
          }
        }
      })

      span.onclick = function() {
        if (player) { player.innerHTML = '' }

        modal.style.display = "none"
        $('#modal-' + id + ' .modal-content').slideUp(400)
      }
    })
  }

})
