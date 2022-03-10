const loadRessource = (uri) => {
    return new Promise(
        function (resolve, reject) {
            fetch(uri,
                {credentials: "include"})
                .then(r => {
                    if (r.ok) resolve(r.json());
                    console.log(r.status)
                    reject(new Error(r.statusText))
                })
                .catch(error => console.log(error))
        }
    );
}

const load = () => {
    return loadRessource("https://webetu.iutnc.univ-lorraine.fr/~monza1u/CrazyCharlyDay/api/index.php");
}

export default {
    loadRessource,
    load,
}
