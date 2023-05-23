		function calcularMedia() {
			// Obter as notas digitadas pelo usuário
			var nota1 = parseFloat(document.getElementById("nota1").value);
			var nota2 = parseFloat(document.getElementById("nota2").value);
			var nota3 = parseFloat(document.getElementById("nota3").value);
			var nota4 = parseFloat(document.getElementById("nota4").value);

			// Calcular a média
			var media = (nota1 + nota2 + nota3 + nota4) / 4;

			// Verificar se o aluno foi aprovado ou não
			if (media >= 6) {
				document.getElementById("resultado").innerHTML = `Parabéns, você foi aprovado! Sua média é: ${media.toFixed(2)}`;
			} else {
				document.getElementById("resultado").innerHTML = "Infelizmente você foi reprovado. Sua média é: " + media.toFixed(2);
			}
		}