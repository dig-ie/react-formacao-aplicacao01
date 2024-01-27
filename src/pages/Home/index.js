import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { UserInfo } from "../../components/UserInfo";
import { Repositories } from "../../components/ Repositories";
function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  // ----------------------------
  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    console.log(newUser);

    const { name, bio, avatar_url, login, id } = newUser;

    if (newUser.name) {
      setCurrentUser({ name, bio, avatar_url, login, id });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };
  return (
    <div className="MainWrapper">
      <Header />
      <div className="ContentWrapper">
        <div className="inputButtonContainer">
          <input
            className="SearchInput"
            name="usuario"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="@username"
          />
          <button className="SearchButton" onClick={handleGetData}>
            Buscar
          </button>
        </div>

        {currentUser?.name ? (
          <div className="UserProfileContainer">
            <div className="UserProfileWrapper">
              <img className="ProfilePic" src={currentUser.avatar_url} />
              <div className="UserProfileTextWrapper">
                <h3>{currentUser.name}</h3>
                <h4>@{currentUser.login}</h4>
                <p>{currentUser.bio}</p>
              </div>
            </div>
          </div>
        ) : null}
        {/* <h1 className="RepositoriesH1Text">Repositórios</h1>
      <div className="RepositoriesWrapper">
        {repos?.length
          ? repos.map((repo) => {
              return (
                <>
                  <div className="RepositorieInfo">
                    <h2>
                      <a className="RepositorieLink"href={repo.html_url} target="_blank">
                        {repo.name}
                      </a>
                    </h2>
                    <p>{repo.description}</p>
                  </div>
                </>
              );
            })
          : null}
      </div> */}
        {repos?.length ? (
          <h1 className="RepositoriesH1Text">Repositórios</h1>
        ) : null}
        <div className="RepositoriesWrapper">
          {repos?.length
            ? repos
                .slice() // Cria uma cópia do array antes de ordenar
                .sort((a, b) => b.id - a.id) // Ordena por ID em ordem decrescente
                .map((repo) => {
                  return (
                    <div className="RepositorieInfo" key={repo.id}>
                      <h2>
                        <a
                          className="RepositorieLink"
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.name}
                        </a>
                      </h2>
                      <p>{repo.description}</p>
                    </div>
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
