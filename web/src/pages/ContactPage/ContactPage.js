import { useForm } from 'react-hook-form';
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms';
import { Flash, useFlash, useMutation } from '@redwoodjs/web';
import BlogLayout from 'src/layouts/BlogLayout';

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`;

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' });
  const { addMessage } = useFlash();
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      addMessage('Thank you for your submission!', {
        style: { backgroundColor: 'green', color: 'white', padding: '1rem' },
      });
      formMethods.reset();
    },
  });
  const onSubmit = (data) => {
    create({ variables: { input: data } });
    console.log(data);
  };
  return (
    <BlogLayout>
      <Flash timeout={2000} />
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />
        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="error" />
        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  );
};

export default ContactPage;
