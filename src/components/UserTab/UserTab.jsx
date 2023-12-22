import s from "./UserTab.module.scss";

const UserTab = ({ userData, userRepos }) => {
  const userReposList = userRepos?.slice(0, 6);
  return (
    <div className={s.userContainer}>
      <div className={s.userWrapper}>
        <div className={s.imgContainer}>
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className={s.userImg}
          />
        </div>
        <div className={s.userInfoContainer}>
          <p>
            <span className={s.userField}>Fullname: </span>
            {userData.name}
          </p>
          <p>
            <span className={s.userField}>Username: </span>
            {userData.login}
          </p>
          <p>
            <span className={s.userField}>Location: </span>
            {userData.location}
          </p>
          <p>
            <span className={s.userField}>Email Address: </span>
            {userData.email}
          </p>
        </div>
      </div>
      <div className={s.userRepoContainer}>
        <h4 className={s.userRepoTitle}>User Repositories</h4>
        {userRepos && (
          <ul className={s.userRepoCardList}>
            {userReposList.map((repo) => (
              <li key={repo.id} className={s.userRepoCard}>
                <p className={s.userRepoLinkTitle}>{repo.name}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.userRepoLinkDesc}
                >
                  {repo.html_url}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserTab;
