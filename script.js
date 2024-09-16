function getRandomKhodam() {
  const randomIndex = Math.floor(Math.random() * khodams.length);
  return khodams[randomIndex];
}

const cheked = {};
$("#btn").on("click", (e) => {
  const name = $("#input").val();
  
  if (cheked[name]) {
    $("#output").removeClass("hidden").addClass("block");
    $("#output").text(`Khodam kamu adalah: ${cheked[name]}`);
  } else {
    const khodamNew = getRandomKhodam();
    cheked[name] = khodamNew;
    $("#output").removeClass("hidden").addClass("block");
    $("#output").text(`Khodam kamu adalah: ${khodamNew}`);
  }
});


