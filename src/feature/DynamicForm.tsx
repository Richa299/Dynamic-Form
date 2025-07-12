import { useState } from "react";

export default function DynamicForm() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    contacts: [],
    experience: [],
  });

  const [contactsArray, setContactsArray] = useState([
    { id: 0, contactValue: "" },
  ]);
  const [experienceList, setExperienceList] = useState([
    {
      id: 0,
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [contactId, setContactId] = useState(0);
  const [experienceId, setExperienceId] = useState(0);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id?: number
  ) => {
    const { name, value } = e.target;
    if (name == "contacts") {
      setContactsArray((contactsArray) =>
        contactsArray.map((item) => {
          if (item.id == id) return { ...item, contactValue: value };
          else {
            return item;
          }
        })
      );
    } else setData((data) => ({ ...data, [name]: value }));
  };

  const handleAddContacts = () => {
    let newid = contactId + 1;
    setContactId((id) => id + 1);

    setContactsArray((contactsArray) => [
      ...contactsArray,
      { id: newid, contactValue: "" },
    ]);
  };
  const handleAddExperience = () => {
    let id = experienceId + 1;
    setExperienceId((experienceId) => experienceId + 1);
    setExperienceList((experienceList) => [
      ...experienceList,
      {
        id: id,
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  return (
    <div>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            value={data.fullName}
            onChange={handleChange}
            name="fullName"
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={data.email}
            onChange={handleChange}
            name="email"
          />
        </label>
      </div>
      <div>
        <label>
          Date of Birth:
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={handleChange}
            name="dateOfBirth"
          />
        </label>
      </div>
      <div>
        <label>
          Contacts:
          <button
            style={{ border: "1px solid black" }}
            onClick={handleAddContacts}
          >
            +
          </button>
          {contactsArray.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="tel"
                  value={item.contactValue}
                  onChange={(e) => handleChange(e, item.id)}
                  name="contacts"
                />
              </div>
            );
          })}
        </label>
      </div>

      <div style={{ backgroundColor: "yellow" }}>
        <label>
          Add Experience:
          {experienceList.map((item) => {
            return (
              <>
                <label>
                  Job Title:
                  <input
                    type="text"
                    value={item.jobTitle}
                    onChange={handleChange}
                    name="jobTitle"
                  />
                </label>
                <label>
                  Company:
                  <input
                    type="text"
                    value={item.company}
                    onChange={handleChange}
                    name="company"
                  />
                </label>
                <label>
                  Start Date:
                  <input
                    type="date"
                    value={item.startDate}
                    onChange={handleChange}
                    name="startDate"
                  />
                </label>
                <label>
                  End Date:
                  <input
                    type="date"
                    value={item.endDate}
                    onChange={handleChange}
                    name="endDate"
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="textArea"
                    value={item.description}
                    onChange={handleChange}
                    name="description"
                  />
                </label>
              </>
            );
          })}
        </label>
        <button onClick={handleAddExperience}>+</button>
      </div>
      <button style={{ border: "2px solid gray" }}>Submit</button>
    </div>
  );
}

//to do

// delete/remove multiple contacts
// use InputField from components
// prevent adding empty contacts
