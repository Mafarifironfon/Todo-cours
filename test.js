$(function () {

  var $list, $newItemForm;
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $checkbox2 = $(".check2");

  $newItemForm.on('submit', function (e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append(`
        <li class="item">
          <div class="item-inner">${ text }</div>
            <input type="submit" class="delete" value="delete" />
            <div class="chexbox-inner">
              <input type="checkbox" name="super" class="check1" id="check1">
              <label for="check1">En cours</label>
              <input type="checkbox" class="check2" id="check2">
              <label for="check2">Terminé</label>
            </div>
        </li>`);
    $('input:text').val('');
  });

  // if ($('input[name=super]').attr(':checked')) {
    $list.on('click', '.check1', function () {
      color("todo", this);
      
    });
    // }
    // else {
    $list.on('click', '.check2', function () {
      color("done", this);
    });
  // }
function color(className, element){
  const isChecked = element.checked;
      var $change = $(element).parents(".item");
      if(isChecked){
        $change.addClass(className);
      }else{
        $change.removeClass(className);
      }
}

  $list.on('click', '.delete', function () {
    var $this = $(this);
    $this.parent().remove();
  });

});