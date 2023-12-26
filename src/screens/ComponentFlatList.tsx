import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';

const users = [
  {
    id: 1,
    name: 'Asish',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 2,
    name: 'Rahul',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 3,
    name: 'Subrata',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 4,
    name: 'Laharee',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 5,
    name: 'Asish',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 6,
    name: 'Rahul',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 7,
    name: 'Subrata',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 8,
    name: 'Laharee',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 9,
    name: 'Asish',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 10,
    name: 'Rahul',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 11,
    name: 'Subrata',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 12,
    name: 'Laharee',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 13,
    name: 'Asish',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 14,
    name: 'Rahul',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 15,
    name: 'Subrata',
    email: 'asishpatra34@gmail.com',
  },
  {
    id: 16,
    name: 'Laharee',
    email: 'asishpatra34@gmail.com',
  },
];

const ComponentFlatList = () => {
  return (
    <View>
      <Text style={{fontSize: 27}}>Component in loop with FlatList</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Userdata item={item} />}
      />
    </View>
  );
};

const Userdata = (props: any) => {
  const item = props.item;

  return (
    <View style={styles.box}>
      <ScrollView>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: '#B33771',
    margin: 2,
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    margin: 10,
    borderColor: '#6D214F',
  },
});

export default ComponentFlatList;
