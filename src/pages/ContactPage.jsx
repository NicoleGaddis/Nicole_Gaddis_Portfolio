import { Form, redirect, useNavigation } from 'react-router-dom';



function ContactPage() {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';



    return (
        <section>
            <h1>Contact Methods</h1>

            <section id="next-steps">
                <div id="social">
                    <Form method='post'>
                        <p>
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                defaultValue={''}
                            />
                        </p>
                        <p>
                            <label htmlFor="email"> Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required

                                defaultValue={''}
                            />
                        </p>

                        <p>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                defaultValue={''}
                            />
                        </p>

                        <div id='social'>
                            <button type="reset">
                                Clear
                            </button>
                            <button disabled={isSubmitting}>Send Message</button>
                        </div>
                    </Form>

                </div>
                <div id="social">
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16">
                        <title>account</title>
                        <path fill="#429e97" fillRule="evenodd"
                            d="M4 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M7 5a3 3 0 0 1-.87 2.113A4 4 0 0 1 8 10.5V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1.5c0-1.427.747-2.679 1.87-3.387A3 3 0 1 1 7 5m-5.5 5.5a2.5 2.5 0 0 1 5 0V12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zm12.251-7.165c.21.122.462.163.685.07l.313-.133a.5.5 0 0 1 .628.21l.308.535a.5.5 0 0 1-.13.649l-.272.205c-.193.146-.283.387-.283.629s.09.483.283.629l.271.205a.5.5 0 0 1 .131.649l-.308.534a.5.5 0 0 1-.628.21l-.313-.131c-.223-.094-.475-.053-.685.069c-.209.121-.374.32-.404.56l-.042.337a.5.5 0 0 1-.496.438h-.618a.5.5 0 0 1-.496-.438l-.042-.337c-.03-.24-.195-.439-.404-.56s-.462-.163-.685-.07l-.313.133a.5.5 0 0 1-.628-.21l-.308-.535a.5.5 0 0 1 .13-.649l.272-.205C9.91 5.983 10 5.742 10 5.5s-.09-.483-.283-.629l-.271-.205a.5.5 0 0 1-.131-.649l.308-.534a.5.5 0 0 1 .628-.21l.313.131c.223.094.475.053.685-.069c.209-.121.374-.32.404-.56l.042-.337A.5.5 0 0 1 12.191 2h.618a.5.5 0 0 1 .496.438l.042.337c.03.24.195.439.404.56M13.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                            clipRule="evenodd" /></svg>
                    <h2>Personal Links</h2>

                    <ul>
                        <li>
                            <a href="https://github.com/NicoleGaddis" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/nicole-gaddis-91b6742b2 " target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="18px" height="18px"
                                    viewBox="0 0 24 24">
                                    <title>linkedin</title>
                                    <path fill="#fff"
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>

                                Linkedin
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </section>


        </section>
    );
}

export default ContactPage;


export async function saveMessageAction({ request, params }) {
    const method = request.method;
    const data = await request.formData();

    const contactData = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
    };
    let url = 'https://nicole-g-portfolio-default-rtdb.firebaseio.com/messages.json';
    const response = await fetch(url,
        {
            method: method,
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(contactData)
        }
    );

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Save Error', message: 'Could not save message.' }, { status: 500 })
        )
    }
     window.alert("Your message has been saved successfully! \n Returning to the home page.");

    return redirect('/');

}