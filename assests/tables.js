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
                <tr>\
                    <td>\
                        <img src="${teams[0].team_logo}" alt="bm">\
                        ${teams[0].team_name}\
                    </td>\
                    <td>${teams[0].results[0]}</td>\
                    <td>${teams[0].results[1]}</td>\
                    <td>${teams[0].results[2]}</td>\
                    <td>${teams[0].results[3]}</td>\
                    <td>${teams[0].results[4]}</td>\
                    <td>${teams[0].results[5]}</td>\
                    <td>${teams[0].results[6]}</td>\
                    <td>${teams[0].results[7]}</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="${teams[1].team_logo}" alt="">\
                        ${teams[1].team_name}\
                    </td>\
                    <td>${teams[1].results[0]}</td>\
                    <td>${teams[1].results[1]}</td>\
                    <td>${teams[1].results[2]}</td>\
                    <td>${teams[1].results[3]}</td>\
                    <td>${teams[1].results[4]}</td>\
                    <td>${teams[1].results[5]}</td>\
                    <td>${teams[1].results[6]}</td>\
                    <td>${teams[1].results[7]}</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="${teams[2].team_logo}" alt="">\
                        ${teams[2].team_name}\
                    </td>\
                    <td>${teams[2].results[0]}</td>\
                    <td>${teams[2].results[1]}</td>\
                    <td>${teams[2].results[2]}</td>\
                    <td>${teams[2].results[3]}</td>\
                    <td>${teams[2].results[4]}/td>\
                    <td>${teams[2].results[5]}</td>\
                    <td>${teams[2].results[6]}</td>\
                    <td>${teams[2].results[7]}</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_6eqit8ye8aomdsrrq0hk3v7gh.png" alt="">\
                        Fc Manchester United\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>0</td>\
                    <td>3</td>\
                    <td>9</td>\
                    <td>11</td>\
                    <td>-2</td>\
                    <td>3</td>\
                </tr>\
            </table>`;
}
