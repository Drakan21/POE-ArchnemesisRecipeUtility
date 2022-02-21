
export function tooltip(node, options) {
    let component, hover, x, y;

    node.addEventListener('mouseover', attachTooltip);
    node.addEventListener('mousemove', updateTooltip);
    node.addEventListener('mouseout', removeTooltip);

    function updatePos(xp, yp) {
        x = xp + 8;
        y = yp + 8;

        let tt = document.querySelector('.tool-tip');
        
        let w = tt.clientWidth;
		if (x > window.innerWidth / 2) {
			x = x - w - 10;
		}
		let h = tt.clientHeight;
		if (y > window.innerHeight / 2) {
			y = y - h - 20;
		}
        document.querySelector('.tool-tip').style = `top: ${y}px; left: ${x}px;`;
    }

    function attachTooltip(e) {
        component = new options.content({
            target: node,
            props: { value: options.value }
        })
        updatePos(e.pageX, e.pageY);
    }

    function updateTooltip(e) {
        updatePos(e.pageX, e.pageY);
    }

    function removeTooltip(e) {
        component.$destroy();
    }

    return {
        destroy() {
            node.removeEventListener('mouseover', attachTooltip);
            node.removeEventListener('mousemove', updateTooltip);
            node.removeEventListener('mouseout', removeTooltip);
        }
    }
}