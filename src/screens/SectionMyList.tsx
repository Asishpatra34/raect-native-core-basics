import {StyleSheet, Text, View, SectionList} from 'react-native';

const SectionMyList = () => {
  const users = [
    {
      id: 1,
      name: 'Asish',
      data: ['React', 'Angular', 'JavaScript', 'Kotlin'],
    },
    {
      id: 2,
      name: 'Subrata',
      data: ['C', 'C++', 'Java', 'CSS'],
    },
    {
      id: 3,
      name: 'Lahaee',
      data: ['NodeJs', 'Python', 'SpringBoot', 'SCSS'],
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>Section List</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={{fontSize: 24}}>{item}</Text>} // items
        renderSectionHeader={(
          {section: {name}}, // header
        ) => (
          <Text style={{fontSize: 30, color: 'green', marginBottom: 6}}>
            {name}
          </Text>
        )}
      />
    </View>
  );
};

export default SectionMyList;
