import { GithubData } from 'core/types/githubData';
import dayjs from 'dayjs';
import './styles.css';

type Params = {
    responseData: GithubData
}

const SearchInfo = ({ responseData }: Params) => {
    const data = dayjs(responseData.created_at?.substr(0, 10).replaceAll('-', '/')).format('DD/MM/YYYY')
   
    return (
        <main>
            <div className="user-info-numbers">
                <p>respositórios públicos: {responseData.public_repos}</p>
            </div >
            <div className="user-info-numbers">
                <p>seguidores: {responseData.followers}</p>
            </div>
            <div className="user-info-numbers">
                <p>seguindo: {responseData.following}</p>
            </div>
            
            <div className="user-details-card data-response">
                <h3 className="user-info-title">Informações </h3>
                <div>
                <p className="user-info-content"><strong>Empresa: </strong>{responseData.company}</p>
                </div>
                <div>
                <p className="user-info-content"><strong>Website/Blog: </strong>{responseData.blog === "" ? "Nenhum blog/website informado" : responseData?.blog}</p>
                </div>
                <div>
                <p className="user-info-content"><strong>Localidade: </strong>{responseData.location}</p>
                </div>
                <div>
                <p className="user-info-content"><strong>Membro desde: </strong>{data}</p>
                </div>                
            </div>
        </main>
    );
};

export default SearchInfo;