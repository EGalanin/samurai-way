import s from './sidebar.module.css';

type SidebarType = {
    props: string[]
};

type FriendType = {
    name: string
};
export const Sidebar = (props: SidebarType) => {
    return (
        <div className={s.sidebar}>
            <h3 className={s.logo}>Friends</h3>
            <div className={s.friendWrapper}>
                {props.props.map((el,index) => {
                    return (
                        <Friend key={index} name={el} />
                    )
                } )}
            </div>


        </div>
    );
};


const Friend = ({name}: FriendType) => {
    return (
        <div className={s.friend}>
            <div className={s.circle}></div>
            <div className={s.item}>{name}</div>
        </div>
    )
}