function validarCpf(n){
			var numDoc = n.replace(/\D/g, '');

			var cpfsInvalidosConhecidos = [
				'00000000000','11111111111',
				'22222222222','33333333333',
				'44444444444','55555555555',
				'66666666666','77777777777',
				'88888888888','99999999999'			
			]
			for(let i = 0; i < cpfsInvalidosConhecidos.length; i++){
				if(cpfsInvalidosConhecidos[i] == numDoc){
					return false;
				}
			}
			var sum = 0;
			var aux = 0;
			var digits = numDoc.split('');
			var firstDigit = digits[9];
			var secondDigit = digits[10];

			if(digits.length != 11){
				return false;
			}
			for(let i = 10; i > 1; i--){
				sum += digits[aux] * i;
				aux++;
			}
			sum *= 10;

			if(sum % 11 != firstDigit){
				return false;
			}else if(sum % 11 == 10){
				if(firstDigit != 0){
					return false;
				}
			}
			
			sum = 0;
			aux = 0;
			for(let i = 11; i > 1; i--){
				sum += digits[aux] * i;
				aux++;
			}
			sum *= 10;

			if(sum % 11 != secondDigit){
				return false;
			}else if(sum % 11 == 10){
				if(secondDigit != 0){
					return false;
				}
			}
			return true;
 }
