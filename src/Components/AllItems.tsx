import { useEffect, useState } from "react";
import HighlitedItemList from "./HighlightedItemList";
import ItemList from "./ItemList";

const AllItems = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedFiles, setLoadedFiles] = useState<string[]>([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://whizzy-software-default-rtdb.firebaseio.com/files.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let files = [];

                for (const key in data) {
                    const file = {
                        id: key,
                        ...data[key],
                    };
                    if (file.name == null) continue
                    files.push(file);
                }

                console.log(files)
                setIsLoading(false);
                setLoadedFiles(files);
            });
    }, []);

    let highlightedFiles = loadedFiles.slice(0, 3);
    let files = loadedFiles.slice(3)

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <><div>
            <h3 className="ps-3">Your highlighted files:</h3>
            <HighlitedItemList items={highlightedFiles} />
        </div><div>
                <ItemList items={files} />
            </div></>
    );
}

export default AllItems;