function table_row(team) {
    return `<tr>\
		<td>\
			<img src="${team.team_logo}" alt="bm">\
			${team.team_name}\
		</td>\
		<td>${team.results[0]}</td>\
		<td>${team.results[1]}</td>\
		<td>${team.results[2]}</td>\
		<td>${team.results[3]}</td>\
		<td>${team.results[4]}</td>\
		<td>${team.results[5]}</td>\
		<td>${team.results[6]}</td>\
		<td>${team.results[7]}</td>\
	</tr>`;
}
