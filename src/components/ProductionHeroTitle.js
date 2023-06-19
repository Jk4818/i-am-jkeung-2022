import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function ProductionHeroTitle(props) {
    return (
            <StaticImage placeholder='none' layout='constrained' src="../assets/images/studio_title.png" alt="studio-title" />
    );
}

export default ProductionHeroTitle;