import Card from "./Card";
function Extensions(){
    const extensions=[
        { heading: 'Instagram image copier', text: 'An addon that copies image or its url on a click.', link: 'https://image-copier-website.vercel.app', github: 'https://github.com/sougataghar477/instagram-image-url-copier' },
        { heading: 'Twitch brightness controller', text: 'Controls brightness of the video player of a twitch stream', link: 'https://addons.mozilla.org/en-US/firefox/addon/twitch-brightness-reducer/', github: 'https://github.com/sougataghar477/twitch-brightness-reducer' },
        { heading: 'Copy Message extension for 7TV', text: 'Copies message in twitch chat if you have 7TV extension', link: 'https://addons.mozilla.org/en-US/firefox/addon/message-copier-for-7tv/', github: 'https://github.com/sougataghar477/7TV-message-copier-for-twitch' },
    ]
    return < >
        <h1 className="text-4xl font-bold mb-8 dark:text-white">My Extensions</h1>
        {extensions.map((extension,index)=> <Card project={extension} key={index}/>)}
    </ >
}
export default Extensions;