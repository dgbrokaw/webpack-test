import David from "./my-module.js";
import Algebrite from "algebrite";

import "bootstrap";
import "./scss/index.scss";

console.log("The following are called from the entry point of this page's bundle.");

// Defined within src.
console.log("An internal module: " + David());

// Imported from an installed npm package.
console.log("Imported Algebrite adding x + x: " + Algebrite.run('x + x'));

// JQuery and D3 imported by webpack's "ProvidePlugin": https://webpack.js.org/plugins/provide-plugin/.
console.log("Do we have jQuery as a global? " + !!$);
console.log("Do we have D3 as a global? " + !!d3);

// Bootstrap JS imported by the import "bootstrap" statement above.
$('.alert').alert();
console.log("Bootstrap is letting you close the alert.");
setTimeout(function() {
    $(".alert").alert("close");
    console.log("Bootstrap closed the alert for you.");
}, 5000);
