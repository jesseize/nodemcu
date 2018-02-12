const base = "http://localhost:8080";

const update = (method,body) => {
  fetch(base + "/config/5a7447f40751b60eb52be300", {
    method: method,
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(body)
  });
}
/*
  Init
*/

fetch(base + "/config/5a7447f40751b60eb52be300")
  .then((response) => response.json())
  .then((data) => {
    // Turn power on / off
    if(data.device1 == "on") {
      $("#power1").click();
    }
    if(data.device2 == "on") {
      $("#power2").click();
    }
    if(data.device3 == "on") {
      $("#power3").click();
    }

    // Set ranges
    $("#device1 p").html("Range 1: " + data.range1);
    $("#device2 p").html("Range 2: " + data.range2);
    $("#device3 p").html("Range 3: " + data.range3);

    $("#range1").val(data.range1);
    $("#range2").val(data.range2);
    $("#range3").val(data.range3);
  }
);

$("#power1").change(function() {
    if(this.checked) {
      update('PATCH',{device1:"on"});
    } else {
      update('PATCH',{device1:"off"});
    }
});

$("#power2").change(function() {
    if(this.checked) {
      update('PATCH',{device2:"on"});
    } else {
      update('PATCH',{device2:"off"});
    }
});

$("#power3").change(function() {
    if(this.checked) {
      update('PATCH',{device3:"on"});
    } else {
      update('PATCH',{device3:"off"});
    }
});

$("#range1").change(() => {
  update('PATCH',{range1:$("#range1").val()});
  $("#device1 p").html("Range 1: " + $("#range1").val());

});

$("#range2").change(() => {
  update('PATCH',{range2:$("#range2").val()});
  $("#device2 p").html("Range 2: " + $("#range2").val());

});

$("#range3").change(() => {
  update('PATCH',{range3:$("#range3").val()});
  $("#device3 p").html("Range 3: " + $("#range3").val());
});
