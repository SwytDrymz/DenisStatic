import "./Main.css";

let Main = ({ handleScroll }) => {
    return (
        <div className="mainIntro">
            <h3 className="finPorad">Finanční poradce</h3>
            <h1 className="hlNadpis">Denis Vlček</h1>
      <div className="popis">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus sed fugiat veniam ipsa quis nihil tenetur delectus ab facere vitae repudiandae, animi numquam autem facilis perferendis rerum sapiente repellat Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis..</p>
      <img className="obr1" src="https://i0.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1080%2C1080&ssl=1" alt="obrázek" />
      </div>
            <button onClick={handleScroll}>Kontaktujte mě</button>
        </div>
        
    )
}

export default Main
