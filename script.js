function getRandomKhodam(khodams) {
  const randomIndex = Math.floor(Math.random() * khodams.length);
  return khodams[randomIndex];
}

const succesOutput = $(
  '<div id="output" class="block p-2 rounded-md bg-green-500/80"></div>'
);

const cheked = {};
$("#btn").on("click", () => {
  const name = $("#input").val();

  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/angga7togk/cek-khodam-semi-native/main/khodam.json",
    success: function (resData) {
      
      if (!cheked[name]) {
        const jsonData = JSON.parse(resData);
        const khodamNew = getRandomKhodam(jsonData);
        cheked[name] = khodamNew;
      }

      succesOutput.text(`Khodam kamu adalah: ${cheked[name]}`);
      $("#container input").before(succesOutput);
    },
  });
});
