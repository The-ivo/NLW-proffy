import react from 'react';
import './styles.css'
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQH9L_-bCV-CxA/profile-displayphoto-shrink_200_200/0/1611242621435?e=1623888000&v=beta&t=bLLlq8jZ1AL2k7OutF3ImKh4rLzih8xAOeUig3Lthvc" alt="Lucas Ivo Machado"></img>
                <div>
                    <strong>Lucas Ivo Machado</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                In hac habitasse platea dictumst. Vestibulum in ligula sed nisi tempor tincidunt. Morbi fringilla pellentesque varius. Fusce ut vestibulum nisi. Maecenas varius, felis eu aliquet viverra, dolor elit rhoncus turpis, at eleifend risus enim vel ex.
            </p>
            <footer>
                <p>
                    Preço por Hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"></img>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}
export default TeacherItem;