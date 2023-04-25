function calculateTotal() {
    var selectElement = document.getElementById('appliance');
    var totalElement = document.getElementById('total');
    var total = 0;
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].selected) {
        total += parseInt(selectElement.options[i].value);
      }
    }
    var consumption = total;
    document.getElementById("result").value = consumption+ " watt-hours per day";
  }