import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import Text from '../../components/Text';
import Section from '../../components/Section';
import SessionsService from '../../services/sessions.service';
import toastMsg, { ToastType } from '../../utils/toastMsg';
import Button from '../../components/Button';

interface ILogin {
  email: string;
  password: string;
}

const Create: React.FunctionComponent = (): React.ReactElement => {
  const [loader, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState({} as ILogin);

  const handleSubmit = async (event: React.FormEvent, values: ILogin): Promise<void> => {
    try {
      event.preventDefault();
      setLoader(true);
      const { email, password } = values;

      await SessionsService.loginUser(email, password);

      setLoader(false);
    } catch (error) {
      setLoader(false);
      toastMsg(ToastType.Error, (error as Error).message);
    }
  };

  return (
    <Section className="create" title="Login" description="Faça seu login">
      <Row className="mb-5">
        <Col md={12}>
          <Text as="h1" size="2rem" weight={700}>
            Login
          </Text>
          <Text as="small" size=".85rem" weight={400}>
            Os campos abaixo já contém validações configuradas para exemplo
          </Text>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={12} className="mb-3">
              <form onSubmit={(e) => handleSubmit(e, initialValues)}>
                <TextField
                  variant="outlined"
                  value={initialValues.email}
                  onChange={(e) => setInitialValues({ ...initialValues, email: e.target.value })}
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  required
                />
                <TextField
                  variant="outlined"
                  value={initialValues.password}
                  onChange={(e) => setInitialValues({ ...initialValues, password: e.target.value })}
                  type="password"
                  name="password"
                  id="password"
                  label="Senha"
                  required
                />
                <Col md={12} className="mt-3">
                  <Button type="submit" disabled={loader} variant="primary" cy="test-create">
                    Login
                  </Button>
                </Col>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
};

export default Create;
