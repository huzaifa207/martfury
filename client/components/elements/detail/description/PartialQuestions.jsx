import React from 'react';

const PartialQuestions = () => (
    <div className="ps-block--questions-answers">
        {/* TODO: make faqs dynamic */}
        <div className="form-group">
            <input
                className="form-control"
                type="text/"
                placeholder="Have a question? Search for answer?"
            />
        </div>
    </div>
);

export default PartialQuestions;
