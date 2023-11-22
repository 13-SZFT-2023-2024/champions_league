const a = () => {
  const content = document.getElementById("content");
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");

  newContent.innerHTML = team_csapat(ateams[0].team_name, ateams[0].team_logo);
  newContent.innerHTML += team_csapat(ateams[1].team_name, ateams[1].team_logo);
  newContent.innerHTML += team_csapat(ateams[2].team_name, ateams[2].team_logo);
  newContent.innerHTML += team_csapat(ateams[3].team_name, ateams[3].team_logo);

  document.body.replaceChild(newContent, content);

  const tabla = document.getElementById("tabla");
  const newTabla = document.createElement("div");
  newTabla.setAttribute("id", "tabla");

  newTabla.innerHTML = team_csoport(ateams);
  document.body.replaceChild(newTabla, tabla);
};

const b = () => {
  const content = document.getElementById("content");
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");

  newContent.innerHTML =
    "<div class='csapat'>\
                                <h1>Arsenal</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_4dsgumo7d4zupm2ugsvm4zm4d.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>PSV</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_24fvcruwqrqvqa3aonf8c3zuy.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Lens</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_3xedluek08t2ka7oypwuullcn.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Sevilla</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_10eyb18v5puw4ez03ocaug09m.png' alt='bm'>\
                            </div>";

  document.body.replaceChild(newContent, content);

  const tabla = document.getElementById("tabla");
  const newTabla = document.createElement("div");
  newTabla.setAttribute("id", "tabla");

  newTabla.innerHTML =
    '\
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
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_4dsgumo7d4zupm2ugsvm4zm4d.png" alt="bm">\
                        Arsenal\
                    </td>\
                    <td>4</td>\
                    <td>3</td>\
                    <td>0</td>\
                    <td>1</td>\
                    <td>9</td>\
                    <td>3</td>\
                    <td>6</td>\
                    <td>9</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_24fvcruwqrqvqa3aonf8c3zuy.png" alt="">\
                        PSV\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>2</td>\
                    <td>1</td>\
                    <td>4</td>\
                    <td>7</td>\
                    <td>-3</td>\
                    <td>5</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_3xedluek08t2ka7oypwuullcn.png" alt="">\
                        Lens\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>2</td>\
                    <td>1</td>\
                    <td>4</td>\
                    <td>4</td>\
                    <td>0</td>\
                    <td>5</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_10eyb18v5puw4ez03ocaug09m.png" alt="">\
                        Sevilla\
                    </td>\
                    <td>4</td>\
                    <td>0</td>\
                    <td>2</td>\
                    <td>2</td>\
                    <td>4</td>\
                    <td>7</td>\
                    <td>-3</td>\
                    <td>2</td>\
                </tr>\
            </table>';

  document.body.replaceChild(newTabla, tabla);
};

const c = () => {
  const content = document.getElementById("content");
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");

  newContent.innerHTML =
    "<div class='csapat'>\
                                <h1>Real Madrid</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_3kq9cckrnlogidldtdie2fkbl.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Napoli</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_gi0l1habji5hpgar77dl5jqe.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Braga</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_26t6lvlpql4w5wu1ih73qpy36.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Union Berlin</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_a8d2gb2nag8fy0itbuxmcibh2.png' alt='bm'>\
                            </div>";

  document.body.replaceChild(newContent, content);

  const tabla = document.getElementById("tabla");
  const newTabla = document.createElement("div");
  newTabla.setAttribute("id", "tabla");

  newTabla.innerHTML =
    '\
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
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_3kq9cckrnlogidldtdie2fkbl.png" alt="bm">\
                        Real Madrid\
                    </td>\
                    <td>4</td>\
                    <td>4</td>\
                    <td>0</td>\
                    <td>0</td>\
                    <td>9</td>\
                    <td>3</td>\
                    <td>6</td>\
                    <td>12</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_gi0l1habji5hpgar77dl5jqe.png" alt="">\
                        Napoli\
                    </td>\
                    <td>4</td>\
                    <td>2</td>\
                    <td>1</td>\
                    <td>1</td>\
                    <td>6</td>\
                    <td>5</td>\
                    <td>1</td>\
                    <td>7</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_26t6lvlpql4w5wu1ih73qpy36.png" alt="">\
                        Braga\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>0</td>\
                    <td>3</td>\
                    <td>5</td>\
                    <td>9</td>\
                    <td>-4</td>\
                    <td>3</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_a8d2gb2nag8fy0itbuxmcibh2.png" alt="">\
                        Union Berlin\
                    </td>\
                    <td>4</td>\
                    <td>0</td>\
                    <td>1</td>\
                    <td>3</td>\
                    <td>3</td>\
                    <td>6</td>\
                    <td>-3</td>\
                    <td>1</td>\
                </tr>\
            </table>';

  document.body.replaceChild(newTabla, tabla);
};

const d = () => {
  const content = document.getElementById("content");
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");

  newContent.innerHTML =
    "<div class='csapat'>\
                                <h1>Real Sociedad</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_63f5h8t5e9qm1fqmvfkb23ghh.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Inter</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_3vo5mpj7catp66nrwwqiuhuup.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Salzburg</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_bonj6qc7po4anunhydmjmi6g5.png' alt='bm'>\
                            </div>";
  newContent.innerHTML +=
    "<div class='csapat'>\
                                <h1>Benfica</h1>\
                                <img src='https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_9ldqu49smv1xg2va0n2cy28zl.png' alt='bm'>\
                            </div>";

  document.body.replaceChild(newContent, content);

  const tabla = document.getElementById("tabla");
  const newTabla = document.createElement("div");
  newTabla.setAttribute("id", "tabla");

  newTabla.innerHTML =
    '\
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
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_63f5h8t5e9qm1fqmvfkb23ghh.png" alt="bm">\
                        Real Sociedad\
                    </td>\
                    <td>4</td>\
                    <td>3</td>\
                    <td>1</td>\
                    <td>0</td>\
                    <td>7</td>\
                    <td>2</td>\
                    <td>5</td>\
                    <td>10</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_3vo5mpj7catp66nrwwqiuhuup.png" alt="">\
                        Inter\
                    </td>\
                    <td>4</td>\
                    <td>3</td>\
                    <td>1</td>\
                    <td>0</td>\
                    <td>5</td>\
                    <td>2</td>\
                    <td>3</td>\
                    <td>10</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_bonj6qc7po4anunhydmjmi6g5.png" alt="">\
                        Salzburg\
                    </td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>0</td>\
                    <td>3</td>\
                    <td>3</td>\
                    <td>5</td>\
                    <td>-2</td>\
                    <td>3</td>\
                </tr>\
                <tr>\
                    <td>\
                        <img src="https://cdn.sportfeeds.io/soccer/images/teams/75x75/uuid_9ldqu49smv1xg2va0n2cy28zl.png" alt="">\
                        Benfica\
                    </td>\
                    <td>4</td>\
                    <td>0</td>\
                    <td>0</td>\
                    <td>4</td>\
                    <td>1</td>\
                    <td>7</td>\
                    <td>-6</td>\
                    <td>0</td>\
                </tr>\
            </table>';

  document.body.replaceChild(newTabla, tabla);
};
