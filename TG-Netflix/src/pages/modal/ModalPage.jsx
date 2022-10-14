import Modal from '../../components/Modal/Modal';
import Footer from '../../components/footer/footer';
import TestModalComp from '../../components/modal/test/TestModalComp'

export default function ModalPage() {
  return (
    <>
      <div className="members-container">
        <Modal />
        <TestModalComp/>
        <Footer />
      </div>
    </>
  );
}
