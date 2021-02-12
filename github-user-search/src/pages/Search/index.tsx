import Button from 'core/components/Button';
import ImageLoader from 'core/components/Loaders/imageLoader';
import InfoLoader from 'core/components/Loaders/infoLoader';
import SearchInfo from 'core/components/SearchInfo';
import { GithubData } from 'core/types/githubData';
import { makeRequest } from 'core/utils/request';
import { useState } from 'react';
import './styles.css';

type Username = {
    user: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
    const [formData, setFormData] = useState<Username>({
        user: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const [responseData, setResponseData] = useState<GithubData>();

    const handleOnChange = (event: FormEvent) => {
        const user = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [user]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        makeRequest({ url: `${formData.user}` })
            .then(response => setResponseData(response.data))
            .finally(() => setIsLoading(false))
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form search">
                    <h1 className="form-title">Encontre um perfil Github</h1>
                    <div className="row">
                        <div className="col-6">
                            <input className="input-user" value={formData.user} type="text" name="user" placeholder="Informe um nome de usuário" onChange={handleOnChange} />
                        </div>
                    </div>
                    <div>
                        <Button title="encontrar" />
                    </div>
                </div>
            </form>

            {responseData?.login ? (
                <>

                    <div className="form-response user-details-container">

                        {isLoading ? <><ImageLoader /> <InfoLoader /> </> : (
                            <>
                                <div>
                                    <div>
                                        <>
                                            <aside className="user-details-card-image">
                                                <img src={responseData ? responseData?.avatar_url : "https://www.seekpng.com/png/detail/983-9833965_icon-people-people-icon-black-png.png"} alt={responseData?.login} className="user-details-image" />
                                            </aside>
                                            <div>
                                            <a href={responseData ? responseData.html_url : "/search"} className="user-perfil" target="_blank" rel="noreffer">ver perfil</a>
                                            </div>
                                        </>
                                    </div>
                                </div>
                                <SearchInfo responseData={responseData ? responseData : { "html_url": "/search" }} />
                            </>
                        ) }

                    </div>
                    </>
            ) : ""}
        </>
    );
};

export default Search;