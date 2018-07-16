import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Welcome to Tech Finance
</h2>
                <p><i>Ever wondered if you have been robbed off you money because you were unable to calculate it,</i></p><p> <i>fear not because that is what Tech Finance is about!!
</i></p>
                <h3>We offer the following:
    <ul>
                        <li>
                            <a href="uif.js"> UIF calculations</a>

                        </li><br />
                        <li>
                            <a href="advise.js">Financial advice</a>

                        </li><br />
                        <li>
                            <a href="Pension.js">Pension Fund calculations</a>
                        </li>

                    </ul>
                </h3>
            </div>
        )
    }

}