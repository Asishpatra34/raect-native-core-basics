import {View, Text, StyleSheet} from 'react-native';

const Grid = () => {
  const users = [
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
      <Text style={{fontSize: 30, alignSelf: 'center'}}>
        Grid With Dynamic Data
      </Text>
      <View
        style={{
          flex: 1, // Cature full space
          flexDirection: 'row', // row left to right
          flexWrap: 'wrap', // all the box are visible then will not hide
        }}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    backgroundColor: '#bffff8',
    margin: 5,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Grid;
