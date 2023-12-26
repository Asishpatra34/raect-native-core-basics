import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

const MyList = () => {
  const user = [
    {
      id: 1,
      name: 'Asish',
    },
    {
      id: 2,
      name: 'Rahul',
    },
    {
      id: 3,
      name: 'Subrata',
    },
    {
      id: 4,
      name: 'Laharee',
    },
    {
      id: 5,
      name: 'Asish',
    },
    {
      id: 6,
      name: 'Rahul',
    },
    {
      id: 7,
      name: 'Subrata',
    },
    {
      id: 8,
      name: 'Laharee',
    },
    {
      id: 9,
      name: 'Asish',
    },
    {
      id: 10,
      name: 'Rahul',
    },
    {
      id: 11,
      name: 'Subrata',
    },
    {
      id: 12,
      name: 'Laharee',
    },
    {
      id: 13,
      name: 'Asish',
    },
    {
      id: 14,
      name: 'Rahul',
    },
    {
      id: 15,
      name: 'Subrata',
    },
    {
      id: 16,
      name: 'Laharee',
    },
  ];

  return (
    <View>
      <Text style={styles.heading}>FlatList</Text>

      <ScrollView>
        <FlatList
          data={user} // Where will the data come from? user
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    alignSelf: 'center',
  },
  item: {
    fontSize: 24,
    color: '#016e62',
    padding: 8,
    margin: 8,
    backgroundColor: '#bffff8',
  },
});

export default MyList;
