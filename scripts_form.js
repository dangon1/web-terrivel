$(document).ready(function() {
	$num_pedras = document.querySelector("[name='num_pedras']"),
	$counter_num_pedras = document.querySelector("[name='counter_num_pedras']");

	$tam_pedras = document.querySelector("[name='tam_pedras']"),
	$counter_tam_pedras = document.querySelector("[name='counter_tam_pedras']");

	$num_pedras.addEventListener('input', function() {
	  $counter_num_pedras.textContent = this.value;
	});
	$tam_pedras.addEventListener('input', function() {
	  $counter_tam_pedras.textContent = this.value;
	});
});