import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Book Your Table</h1>
            <form>
                <input type='text' placeholder="Full Name" />
                <input type='email' placeholder="Type your Email" />
                <textarea placeholder="Write Here....."></textarea>
                <input type='submit' value="Book"/>
            </form>
        </div>
    );
};

export default Contact;