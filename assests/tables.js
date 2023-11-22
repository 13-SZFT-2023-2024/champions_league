function team_csapat(team_name, team_logo, team_results) {
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
                        <img src="${team_logo}" alt="bm">\
                        ${team_name}\
                    </td>\
                    <td>${team.results[0]}</td>\
                    <td>4</td>\
                    <td>0</td>\
                    <td>0</td>\
                    <td>11</td>\
                    <td>6</td>\
                    <td>5</td>\
                    <td>12</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_b3r6d8ydtmtjckam6pku9y400.png" alt="">\
                        Fc Köbenhavn\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>1</td>\
                    <td>2</td>\
                    <td>7</td>\
                    <td>8</td>\
                    <td>-1</td>\
                    <td>4</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_esa748l653sss1wurz5ps3228.png" alt="">\
                        Fc Galatasaray\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>1</td>\
                    <td>2</td>\
                    <td>7</td>\
                    <td>9</td>\
                    <td>-2</td>\
                    <td>4</td>\
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
