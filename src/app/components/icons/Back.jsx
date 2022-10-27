import PropTypes from 'prop-types';

const BackIcon = ({ className }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="tiny"
      viewBox="0 0 42 42"
    >
      <path fillRule="evenodd" d="M31 38.32 13.391 21 31 3.68 28.279 1 8 21.01 28.279 41z" />
    </svg>
  );
};

BackIcon.propTypes = {
  className: PropTypes.string,
};

BackIcon.defaultProps = {
  className: '',
};

export default BackIcon;
