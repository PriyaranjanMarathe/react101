import { Fragment, useState } from 'react';

interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // State for tracking the selected index
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Event handler for the click event
    const handleClick = (index: number) => {
        setSelectedIndex(index);
        console.log(`Selected item: ${items[index]}`);
    };

    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={index}
                        onClick={() => {
                            handleClick(index);
                            onSelectItem(item)
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;
