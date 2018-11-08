import Home from './Home'
import CommentBox from "./CommentBox"
import CommentList from './CommentList'
import Lazy from './Lazy'
import HOCs from './HOCs'
import Switch from './Switch'

const LINKS = [
    ['', 'Home', Home, true],
    ['box', 'Comment box', CommentBox],
    ['list', 'Comment list', CommentList],
    ['lazy', 'Lazy loading', Lazy],
    ['HOCs', 'HOCs', HOCs],
    ['switch', 'Switch', Switch]
];

export default callback => LINKS.map(linkData => callback(linkData))