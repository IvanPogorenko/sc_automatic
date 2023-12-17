function Overlay(props) {
    return (
        <div className="Overlay">
            <div className="Head">
                <h>НАПИШИТЕ НАМ</h>
                <img onClick={props.onClose} src="./img/close_btn.png" alt="close"></img>
            </div>
            <form>
                    <p>Имя</p>
                    <input type={"text"}></input>
                    <p>Фамилия</p>
                    <input type={"text"}></input>
                    <p>Телефон</p>
                    <input type={"text"}></input>
                    <p>Почта</p>
                    <input type={"text"}></input>
                    <p>Текст сообщения</p>
                    <textarea type={"text"}></textarea>
                </form>
        </div>
    );
}
export default Overlay;