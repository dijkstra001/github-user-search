import './styles.css';

type Props = {
    title: string;
}
const Button = ({ title }: Props) => {
    return (
        <button className="btn btn-text">{title}</button>
    );
};

export default Button;