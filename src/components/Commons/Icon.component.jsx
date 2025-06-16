function Icon({ url, ...props }) {
  if (!url) {
    return null;
  }
  return <img className="fill-white" {...props} src={url} alt="" />;
}

export default Icon;
