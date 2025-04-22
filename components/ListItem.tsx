"use-client";

interface ListItemProps {
    image: string;
    name: string;  
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({
    image, 
    name,
    href
}) => {

    const router = useRouter();
    const onClick = () => {
        // Handle click event
        router.push(href);
    };

    return (
        <div
            onClick={onClick}
            className="
            flex
            items-center
            gap-x-4
            cursor-pointer
            hover:bg-neutral-800
            rounded-md
            p-2
            "
        >
            <img src={image} alt={name} className="w-10 h-10 rounded-md" />
            <p className="text-white">{name}</p>
        </div>
    );
}

const ListItem = () => {
    return ( 
        <div>
            List Item
        </div> 
    );
}
 
export default ListItem;