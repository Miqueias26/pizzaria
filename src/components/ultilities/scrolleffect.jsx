import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ScrollEffect = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current; // Copiar o valor do ref para uma variável

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Usar o valor armazenado
      }
    };
  }, []); // Nenhuma dependência adicional necessária

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

ScrollEffect.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ScrollEffect.defaultProps = {
  className: "",
};

export default ScrollEffect;
