import { updateAccount } from '@/services/mgo2pc/api';
import { getUserAccount, getUserToken, isLoggedIn } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, Menu, notification } from 'antd';
import React, { useCallback, useState } from 'react';
import { useHistory, useIntl } from 'umi';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export default (): React.ReactNode => {
  const intl = useIntl();
  const [menu, setMenu] = useState('basic');
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const account = getUserAccount();
  const displayName = account ? account.displayName : 'User';

  if (!isLoggedIn()) {
    history.push('/');
  }

  const onUpdateAccount = async (e: any) => {
    const token = getUserToken();

    if (!token) {
      notification.error({
        message: `Error`,
        description: 'You are not logged in.',
        placement: 'topRight',
      });
      return;
    }

    const data = {
      displayName: e.target[0].value,
      password: e.target[1].value,
      passwordNew: e.target[2].value,
    };

    try {
      setLoading(true);
      await updateAccount(data);
      notification.success({
        message: `Success`,
        description: 'Your account has been updated.',
        placement: 'topRight',
      });
      history.push('/');
    } catch (err) {}
    setLoading(false);
  };

  const onMenuClick = useCallback(
    (event) => {
      setMenu(event.key);
    },
    [menu, setMenu],
  );

  return (
    <PageContainer>
      <Card>
        <div className="row">
          <div className="col-md-3">
            <Menu defaultSelectedKeys={[menu]} mode="inline" onSelect={onMenuClick}>
              <Menu.Item key="basic">Basic Settings</Menu.Item>
            </Menu>
          </div>
          <div className="col-md-9">
            {menu === 'basic' && (
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onSubmitCapture={onUpdateAccount}
              >
                <Form.Item label="Display Name" name="display_name">
                  <Input placeholder={displayName} />
                </Form.Item>

                <Form.Item label={intl.formatMessage({ id: 'app.currentpw' })} name="password">
                  <Input.Password placeholder="Your current password" />
                </Form.Item>

                <Form.Item label={intl.formatMessage({ id: 'app.newpw' })} name="password_new">
                  <Input.Password placeholder="Your new password" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button loading={loading} type="primary" htmlType="submit">
                    {intl.formatMessage({ id: 'app.updateinfo' })}
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};
