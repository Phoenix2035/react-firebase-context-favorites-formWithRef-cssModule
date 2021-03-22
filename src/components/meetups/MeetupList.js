import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetups }) {
    return (
        <ul className={classes.list}>
            {
                meetups.map(item =>
                    <MeetupItem key={item.id} {...item} />
                )
            }
        </ul>
    );
}

export default MeetupList;