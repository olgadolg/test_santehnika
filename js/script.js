'use strict';

class ControlCollapse {
    constructor(parentBlockClass) {
        this.parentBlockClass = parentBlockClass;
        this.parentBlock = document.querySelectorAll(this.parentBlockClass);
        this.links = [];
        this.contentBlocks = [];
        for (var i = 0; i < this.parentBlock.length; i++) {
            this.links.push(this.parentBlock[i].querySelector('a'));
            let link = this.parentBlock[i].querySelector('a');
            let contentBlock = this.parentBlock[i].querySelector('.collapse-content');
            link.addEventListener('click', () => this.toggleContent(contentBlock));
        }
    }

    toggleContent(contentBlock) {
        contentBlock.style.display = (contentBlock.style.display && contentBlock.style.display == 'none') ? 'block' : 'none';
    }
}

let control1 = new ControlCollapse(".simple-collapse");

class ControlCollapseAnimate extends ControlCollapse {
    toggleContent(contentBlock) {
        $(contentBlock).toggle(300);
    }
}

let control2 = new ControlCollapseAnimate(".simple-collapse2");