/**
	General Publicity
 */
function muestra_lateral_izquierdo(idZone){

	if(OA_output[idZone] != undefined || OA_output[idZone] != ''){
		_html = '';
		_html += '<div style="width: 120px; height: 600px; position: fixed; left: 50%; top: 24%; margin-top: -90px; margin-left: -640px;" id="bannerlateralfixed_eu_izq">';
		_html += '	<div style="position: absolute; left: 1%; bottom: 0px;" class="2">';
		_html += '		<img title="Cerrar" onclick="document.getElementById('bannerlateralfixed_eu_izq').style.display='none';cookietime();" src="https://cdn1.iconfinder.com/data/icons/blueberry/32/close_delete.png">';
		_html += OA_output[idZone];
		_html += '	</div>';
		_html += '</div>';

			$("#bannerlateralfixed_eu_izq").remove();
			$(".footer").before(_html);

	}
}

function muestra_lateral_derecho(idZone){

	if(OA_output[idZone] != undefined || OA_output[idZone] != ''){
		_html = '';
		_html += '<div style="width: 120px; height: 600px; position: fixed; left: 50%; top: 24%; margin-top: -90px; margin-left: 520px;" id="bannerlateralfixed_eu_der">';
		_html += '	<div style="position: absolute; left: 1%; bottom: 0px;" class="2">';
		_html += '		<img title="Cerrar" onclick="document.getElementById('bannerlateralfixed_eu_der').style.display='none';cookietime();" src="https://cdn1.iconfinder.com/data/icons/blueberry/32/close_delete.png">">';
		_html += OA_output[idZone];
		_html += '	</div>';
		_html += '</div>';

			$("#bannerlateralfixed_eu_der").remove();		
			$(".footer").before(_html);

	}
}
