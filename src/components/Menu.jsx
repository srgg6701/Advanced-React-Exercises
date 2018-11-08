import Home from './Home'
import CommentBox from "./CommentBox"
import CommentList from './CommentList'
import Lazy from './Lazy'
import HOCs from './HOCs'
import Toggle1 from './Switch/toggle1'
import Toggle2 from './Switch/toggle2-static'

const LINKS = [
    ['', 'Home', Home, true],
    ['box', 'Comment box', CommentBox],
    ['list', 'Comment list', CommentList],
    ['lazy', 'Lazy loading', Lazy],
    ['HOCs', 'HOCs', HOCs],
    ['toggle1', 'Toggle1', Toggle1],
    ['toggle2', 'Toggle2', Toggle2]
];

export default callback => LINKS.map(linkData => callback(linkData))