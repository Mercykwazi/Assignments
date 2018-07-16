import React from "react";

export default class Language extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Hey there! may you please choose the language that you would prefer</h1>
                <button className="button3">IsiZulu</button><br /><br />
                <button className="button3">English</button><br /><br />
                <button className="button3">Sesotho</button><br /><br />
                <button className="button3">Afrikaans</button><br /><br />
                <button className="button3">Xitsonga</button><br /><br />
            </div>

        )
    }

}
