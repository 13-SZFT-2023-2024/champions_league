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
                    <td>${teams[2].results[4]}</td>\
                    <td>${teams[2].results[5]}</td>\
                    <td>${teams[2].results[6]}</td>\
                    <td>${teams[2].results[7]}</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="${teams[3].team_logo}" alt="">\
                        ${teams[3].team_name}\
                    </td>\
                    <td>${teams[3].results[0]}</td>\
                    <td>${teams[3].results[1]}</td>\
                    <td>${teams[3].results[2]}</td>\
                    <td>${teams[3].results[3]}</td>\
                    <td>${teams[3].results[4]}</td>\
                    <td>${teams[3].results[5]}</td>\
                    <td>${teams[3].results[6]}</td>\
                    <td>${teams[3].results[7]}</td>\
                    
                </tr>\
            </table>`;
}
