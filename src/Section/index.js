import "./style.css"

const Section = ({ title, body, extraBodyContent }) => (
    <section className="section">
        <div className="section section--higlighted">
            <h2 className="section__head section__head--higlighted">{title}</h2>
            {extraBodyContent}
        </div>
        {body}
    </section>
)

export default Section;