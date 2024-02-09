import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { Login } from './Login'

const ModalAuth = ({ isOpenModal, onCloseModal }) => {
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Autenticación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Iniciar Sesión</Tab>
                <Tab>Registrarse</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login onClose={onCloseModal} />
                </TabPanel>
                <TabPanel>
                  <Login onClose={onCloseModal} createAcc />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ModalAuth }
