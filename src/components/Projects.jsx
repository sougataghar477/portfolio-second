import Card from "./Card";
function Projects(){
    let projects = [
        { heading:'TimeFramed',text:'Made some parts of the website with React JS.',link:'https://timeframed.art'},
        {heading:'Plantly',text:'A fullstack E-Commerce website made with Next JS,Chakra UI,Stripe and Mongo DB.',link:'https://plantly-rho.vercel.app/',github:'https://github.com/sougataghar477/plantly'},
        { heading: 'Rabbit API', text: 'A fullstack open source Rabbit Image API made with Next JS,Chakra UI,MongoDB and Firebase.', link: 'https://rabbit-api-two.vercel.app/', github: 'https://github.com/sougataghar477/rabbit-api' },
        {heading:'Movie & TV Show Database',text:'A website for looking up Movies and TV Shows made with React and React Router,Chakra UI featuring pagination.',link:'https://movie-show-db.vercel.app/',github:'https://github.com/sougataghar477/movie-show-db'},
        { heading: 'Kontrast Productions', text: 'Made the portfolio and contact sections.', link: 'https://www.kontrastproduction.sk/#testimonials' },
        { heading: 'PersonalFinance', text: 'A website I made with react.', link: 'https://www.personalfinances.stage.iamthedev.eu/' },
        { heading:'Todos App',text:'A full stack todos app made with Next JS,Mantine.',link:'https://test-todos-next.vercel.app/',github:'https://github.com/sougataghar477/test-todos-next'},
        {heading:'Alveus Sanctuary',text:'Contributed to website of Alveus Sanctuary.',link:'https://www.alveussanctuary.org/',github:'https://github.com/alveusgg/alveusgg/tree/main/apps/website'},
        { heading: 'Help Ukraine', text: 'A website containing useful links for helping Ukraine.', link: 'https://help-ukraine.netlify.app/', github: 'https://github.com/sougataghar477/helpUkraine' },
        { heading: 'CSS Units Converter', text: 'Converts lots of units into another units.', link: 'https://css-unitsconverter.netlify.app/', github: 'https://github.com/sougataghar477/css-units-converter' },
        { heading: 'Random Color Generator', text: 'Generates random color on click and you can copy it.', link: 'https://sougataghar477.github.io/colors/index.html', github: 'https://github.com/sougataghar477/7TV-message-copier-for-twitch' },
  ]
    return <  >
        <h1 className="text-4xl font-bold mb-8 text-white">My Projects</h1>
        {projects.map((project,index)=> <Card project={project} key={index}/>)}
    </ >
}
export default Projects;