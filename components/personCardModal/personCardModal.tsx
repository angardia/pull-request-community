const PersonCardModal = () => {
  return (
    <div className="personCardModal">
      <style jsx>{`
        .personCardModal {
          height: calc(100vh - var(--header-height));
          width: 100vw;
          background-color: rgba(0, 0, 0, 0.25);
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default PersonCardModal;
