import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { searchMovieByTitle } from './utils/api';
import { useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState(null)
  
  const handleSearch = async () => {
    setResult(null)
    if (search === '') return;
    console.log(`Searching movie with title: ${search}`);

    const movie = await searchMovieByTitle(search);
    setResult(movie);

    console.log(movie.Poster);
  }
  
  return (
    <View style={styles.searcher}>
      <Text style={styles.searcher__title}>Movie Search</Text>

      <View style={styles.searcher__input}>
        <TextInput
          placeholder="Search for a movie"
          style={styles.searcher__input__field}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <Button title="Search" onPress={handleSearch} />
      </View>

      {result != null ? <View style={styles.searcher__results}>
        <Text style={styles.result__title}>{result.Title} ({result.Year})</Text>

        <Image style={styles.result__poster} source={{ uri: result.Poster }} />
        <Text style={styles.result__plot}>{result.Plot}</Text>
      </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  searcher: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searcher__input: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  searcher__input__field: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
  },

  searcher__results: {
    alignItems: 'center',
  },

  result__title: {
    fontSize: 24,
    marginBottom: 20,
  },

  result__plot: {
    fontSize: 16,
    margin: 20,
  },

  searcher__title: {
    fontSize: 24,
    marginBottom: 20,
  },

  result__poster: {
    width: 200,
    height: 300,
  }
});
