function team_csoport(teams) {
    return `\
    <table>\
        <tr>\
            <th>Csapat</th>\
            <th>P</th>\
            <th>GY</th>\
            <th>D</th>\
            <th>V</th>\
            <th>F</th>\
            <th>V</th>\
            <th>+/-</th>\
            <th>Pont</th>\
        </tr>\
        ${table_row(teams[0])}
        ${table_row(teams[1])}
        ${table_row(teams[2])}
        ${table_row(teams[3])}
    </table>`;
}
