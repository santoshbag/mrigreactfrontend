// OptionInputs.js
import React from 'react';

function OptionInputs({ strikePrice, setStrikePrice, premium, setPremium, expiration, setExpiration }) {
    return (
        <div>
            <label>
                Strike Price:
                <input
                    type="number"
                    value={strikePrice}
                    onChange={(e) => setStrikePrice(Number(e.target.value))}
                />
            </label>
            <label>
                Premium:
                <input
                    type="number"
                    value={premium}
                    onChange={(e) => setPremium(Number(e.target.value))}
                />
            </label>
            <label>
                Expiration (days):
                <input
                    type="number"
                    value={expiration}
                    onChange={(e) => setExpiration(Number(e.target.value))}
                />
            </label>
        </div>
    );
}

export default OptionInputs;
