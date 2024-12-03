import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { HiMiniHome } from "react-icons/hi2";
import { RxComponent2 } from "react-icons/rx";
import { FaDog } from "react-icons/fa";


export const MenuItens = () => {

    const listItens = [
        {
            name: 'Home',
            path: '/',
            icon: <HiMiniHome />,
        },

        {
            name: 'Dogs',
            path: '/',
            icon: <FaDog/>,
        }
    ]
    




    return (
        <List>
            {listItens.map((item) => (
                <ListItem
                    disablePadding
                    key={item.name}
                    onClick={() =>
                        window.location.replace(item.path)
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        {item.name}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}