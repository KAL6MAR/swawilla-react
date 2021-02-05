import React from 'react';
import Collection from './Collection';
import Item from './Item';
import PageLinks from './PageLinks';


function Shop({ items }) {
    return (
        <div>
            <Collection />
            <section className="ftco-section bg-light">
                <div className="container-fluid">
                    <div className="row">
                        {
                            items.map(obj => <Item key={obj.id} {...obj} />)
                        }
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <PageLinks onClickItem={(name) => console.log(name)} items={[2, 3, 4]} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;