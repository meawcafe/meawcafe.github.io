import { useRef } from "react";
import { useTouchStore } from "~/store/touch";

const MIN_DRAG_DISTANCE = 100;

export function useTouchNavigation() {
  const touchStartRef = useRef(null);

  const {
    decrementSectionIndex,
    incrementSectionIndex,
    setTouchPositionY,
    setShowNavHelpers,
    hideNavHelpers,
  } = useTouchStore.getState();

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const dragDistance = touchEndX - touchStartRef.current;

    if (Math.abs(dragDistance) > MIN_DRAG_DISTANCE) {
      dragDistance > 0 ? decrementSectionIndex() : incrementSectionIndex();
    }
    hideNavHelpers();
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartRef.current;

    setTouchPositionY(currentY - 48);

    if (Math.abs(deltaX) > 100) {
      setShowNavHelpers({
        left: deltaX > 0,
        right: deltaX <= 0,
      });
    } else {
      hideNavHelpers();
    }
  };

  return {
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  };
}
