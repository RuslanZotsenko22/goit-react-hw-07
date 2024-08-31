import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import Title from './components/Title/Title'

import './App.css'



const App = () => {

  return (
    <div>
      <Title />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );

}


export default App;