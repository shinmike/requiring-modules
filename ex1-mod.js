var object = {
// public function
  a: function(){
  privFunct();
},
  b: console.log("hello")
}

// private function
function privFunct(){
  console.log("yo yo")
}

module.exports = object;