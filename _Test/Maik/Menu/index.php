<html>
<head>
<title>Menü dynamisch laden</title>
<?php include "js/_includes" ?>
</head>
<body onLoad="rmrFrageStandorteAb()">
<form name="menu">   
<table border="0">
	<tr>
		<td>Standort</td>
		<td>
			<select name="standort" style="width:220px;" size="1" onChange="rmrFrageHaeuserAb(this.form)" disabled>
				<option>Bitte warten</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Haus</td>
		<td>
			<select name="haus" style="width:220px" size="1" onChange="rmrFrageRaeumeAb(this.form)" disabled>
				<option>Standort auswählen</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Raum</td>
		<td>
			<select name="raum" style="width:220px" size="1" disabled>
				<option>Haus auswählen</option>
			</select>
		</td>
	</tr>
</table>
</form>
</body>
</html>