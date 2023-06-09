type EthProps = {
  classes: string;
  width: string;
  height: string;
};

const Eth = (props: EthProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.classes}
    >
      <path
        d="M24.4844 19.0626V4.30322L36.6306 24.5281L36.5974 24.5822L24.4844 19.0626Z"
        // fill={props.color}
        className={props.classes}
      />
      <path
        d="M24.3358 4.62605V4.90932C24.3358 9.48196 24.3358 14.0532 24.3358 18.6231C24.3358 18.8314 24.3108 18.9813 24.0742 19.0896C20.2787 20.8101 16.4867 22.5375 12.6981 24.2719C12.6192 24.3073 12.5382 24.3344 12.3867 24.3927L24.2673 4.60522L24.3358 4.62605Z"
        // fill={props.color}
        className={props.classes}
      />
      <path
        d="M24.3259 19.1189V31.8641L12.1797 24.6573L24.3259 19.1189Z"
        // fill={props.color}
        className={props.classes}
      />
      <path
        d="M24.4902 19.2146L36.6157 24.7426L24.4902 31.9369V19.2146Z"
        // fill={props.color}
        className={props.classes}
      />
      <path
        d="M36.347 27.667C32.4089 33.2283 28.4612 38.807 24.5038 44.403C24.4893 44.2822 24.4727 44.2156 24.4727 44.1468C24.4727 41.0621 24.4727 37.9773 24.4727 34.8946C24.4767 34.8232 24.496 34.7535 24.5293 34.6902C24.5626 34.627 24.6091 34.5716 24.6657 34.5281C28.5401 32.2202 32.4145 29.92 36.2889 27.6274L36.347 27.667Z"
        // fill={props.color}
        className={props.classes}
      />
      <path
        d="M12.6436 27.6316C16.4737 29.8992 20.301 32.1702 24.1256 34.4447C24.1822 34.4809 24.2301 34.5292 24.2659 34.586C24.3018 34.6429 24.3248 34.707 24.3331 34.7738C24.3456 37.869 24.3456 40.9649 24.3331 44.0614C24.3268 44.1142 24.3164 44.1665 24.302 44.2176L12.5938 27.6712L12.6436 27.6316Z"
        // fill={props.color}
        className={props.classes}
      />
    </svg>
  );
};

export default Eth;
