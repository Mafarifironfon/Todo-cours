$(function() {

    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');

  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      var text = $('input:text').val();
      $list.append(`
        <li class="item">
          <div class="item-inner">${ text }</div>
            <input type="submit" class="delete" value="delete" />
            <div class="chexbox-inner">
              <input type="checkbox" class="check1">
              <label for="subscribeNews">En cours</label>
              <input type="checkbox" class="check2">
              <label for="subscribeNews">Terminé</label>
            </div>
        </li>`);
      $('input:text').val('');
    });
  
    $list.on('click', '.delete', function() {
      var $this = $(this);
      $this.parent().remove();
    });

    $list.on('click', '.check1', function() {
      var $change = $(this).parents(".item");
      $change.addClass("todo");
    });
  
  });