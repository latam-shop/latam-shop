import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from './icon.types';
import { ICON_LIBRARY } from './icon.util';

const Icon = ({
    name,
    color = 'text-gray-900',
    size = 'xl',
    filled = true
}: IconProps) => {
    const iconSet = ICON_LIBRARY[name];

    if (!iconSet) {
        return null;
    }
    const selectedIcon = filled ? iconSet.solid : iconSet.regular;

    return (
        <FontAwesomeIcon
            size={size}
            icon={selectedIcon}
            className={`${color} shrink-0 block`}
            aria-hidden="true"
            data-testid={name}
        />
    );
};

export default Icon;