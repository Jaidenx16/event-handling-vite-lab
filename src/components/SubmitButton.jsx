function SubmitButton() {
  function handleEnter() {
    console.log('Mouse Entering')
  }

  function handleLeave() {
    console.log('Mouse Exiting')
  }

  // The mouse events call their matching functions.
  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  )
}

export default SubmitButton
