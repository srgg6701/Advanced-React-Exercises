import CommentBox from "./CommentBox"
import CommentList from './CommentList'
import Consumer from './Consumer'

const LINKS = [
    ['box', 'Comment box', CommentBox],
    ['list', 'Comment list', CommentList],
    ['consumer', 'Consume it!', Consumer]
];

export default callback => LINKS.map(linkData => callback(linkData))