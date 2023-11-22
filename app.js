const a = () => {
    const content = document.getElementById('content');
    const newContent = document.createElement('div');
    newContent.setAttribute('id', 'content');

    newContent.innerHTML = team_csapat(
        ateams[0].team_name,
        ateams[0].team_logo
    );
    newContent.innerHTML += team_csapat(
        ateams[1].team_name,
        ateams[1].team_logo
    );
    newContent.innerHTML += team_csapat(
        ateams[2].team_name,
        ateams[2].team_logo
    );
    newContent.innerHTML += team_csapat(
        ateams[3].team_name,
        ateams[3].team_logo
    );

    document.body.replaceChild(newContent, content);

    const tabla = document.getElementById('tabla');
    const newTabla = document.createElement('div');
    newTabla.setAttribute('id', 'tabla');

    newTabla.innerHTML = team_csoport(ateams);
    document.body.replaceChild(newTabla, tabla);
};

const b = () => {
    const content = document.getElementById('content');
    const newContent = document.createElement('div');
    newContent.setAttribute('id', 'content');

    newContent.innerHTML = team_csapat(
        bteams[0].team_name,
        bteams[0].team_logo
    );
    newContent.innerHTML += team_csapat(
        bteams[1].team_name,
        bteams[1].team_logo
    );
    newContent.innerHTML += team_csapat(
        bteams[2].team_name,
        bteams[2].team_logo
    );
    newContent.innerHTML += team_csapat(
        bteams[3].team_name,
        bteams[3].team_logo
    );

    document.body.replaceChild(newContent, content);

    const tabla = document.getElementById('tabla');
    const newTabla = document.createElement('div');
    newTabla.setAttribute('id', 'tabla');

    newTabla.innerHTML = team_csoport(bteams);
    document.body.replaceChild(newTabla, tabla);
};

const c = () => {
    const content = document.getElementById('content');
    const newContent = document.createElement('div');
    newContent.setAttribute('id', 'content');

    newContent.innerHTML = team_csapat(
        cteams[0].team_name,
        cteams[0].team_logo
    );

    newContent.innerHTML += team_csapat(
        cteams[1].team_name,
        cteams[1].team_logo
    );
    newContent.innerHTML += team_csapat(
        cteams[2].team_name,
        cteams[2].team_logo
    );
    newContent.innerHTML += team_csapat(
        cteams[3].team_name,
        cteams[3].team_logo
    );

    document.body.replaceChild(newContent, content);

    const tabla = document.getElementById('tabla');
    const newTabla = document.createElement('div');
    newTabla.setAttribute('id', 'tabla');

    newTabla.innerHTML = team_csoport(cteams);
    document.body.replaceChild(newTabla, tabla);
};

const d = () => {
    const content = document.getElementById('content');
    const newContent = document.createElement('div');
    newContent.setAttribute('id', 'content');

    newContent.innerHTML = team_csapat(
        dteams[0].team_name,
        dteams[0].team_logo
    );

    newContent.innerHTML += team_csapat(
        dteams[1].team_name,
        dteams[1].team_logo
    );
    newContent.innerHTML += team_csapat(
        dteams[2].team_name,
        dteams[2].team_logo
    );
    newContent.innerHTML += team_csapat(
        dteams[3].team_name,
        dteams[3].team_logo
    );

    document.body.replaceChild(newContent, content);

    const tabla = document.getElementById('tabla');
    const newTabla = document.createElement('div');
    newTabla.setAttribute('id', 'tabla');

    newTabla.innerHTML = team_csoport(dteams);
    document.body.replaceChild(newTabla, tabla);
};
