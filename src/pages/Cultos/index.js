import React, { useState, useEffect } from 'react';
import {
    Dimensions,
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
    Alert,
    Linking
} from 'react-native';
import axios from 'axios';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Feather';

/** 
 Busca 30 últimos registros
 https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpeeRy8FV7l-fO8PCE2zUgg&maxResults=30&order=date&key=[YOUR_API_KEY]
 **/

/** 
 Busca por uma query em 'q'
 https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpeeRy8FV7l-fO8PCE2zUgg&maxResults=30&order=date&q=[CRITERIO]&key=[YOUR_API_KEY]
 **/

/** 
 JSON de Teste
 https://devzanini.ml/arquivos/cultos.json
 **/

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Videos = () => {
    const API_YOUTUBE = 'AIzaSyAcs84WMxoZ9-FnUAeCozjez14m5za5-E4'
    const baseURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpeeRy8FV7l-fO8PCE2zUgg&maxResults=50&order=date&key=${API_YOUTUBE}`
    const baseURLTeste = 'https://devzanini.ml/arquivos/cultos.json';

    const [videos, setVideos] = useState('');
    const [busca,setBusca] = useState('');

    const handleShare = (videoId) => {
        const shareOptions = {
            title: 'Compartilhar para',
            url: 'https://www.youtube.com/watch?v=' + videoId,
        };
        Share.open(shareOptions)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }

    const handleYouTube = async () => {
        try {
            const { data } = await axios.get(baseURL)
            setVideos(data.items)
            //console.log(data.items[0])
        } catch (error) {
            Alert.alert("Ops... algo deu errado", "Verifique sua conexão de internet e tente novamente.")
        }

    }

    const handleYouTubeBusca = async (busca) => {
        try {
            const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpeeRy8FV7l-fO8PCE2zUgg&maxResults=50&order=date&q=${busca}&key=${API_YOUTUBE}`)
            // const { data } = await axios.get(baseURLTeste)
            setVideos(data.items)
            //console.log(busca)
        } catch (error) {
            Alert.alert("Ops... algo deu errado", "Verifique sua conexão de internet e tente novamente.")
        }

    }

    useEffect(() => {
        handleYouTube()
    }, [])

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#eee' }}>
                <View style={style.container_busca}>
                    <TextInput placeholder="Pesquisar por..." style={style.search_text} value={busca} onChangeText={busca => setBusca(busca)}></TextInput>
                    <TouchableOpacity onPress={()=>{
                        handleYouTubeBusca(busca)
                    }}>
                        <Text style={style.search_button}>PESQUISA</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={{ marginBottom: 120 }}
                    keyExtractor={(item) => item.id.videoId}
                    data={videos}
                    renderItem={({ item }) => {
                        const tituloVideo = (item.snippet.title).split(" | ")
                        const dataTransmissao = (item.snippet.publishedAt).slice(0, 10).split("-")
                        return (
                            <>

                                <View style={style.video_card}>
                                    <View>
                                        <Image
                                            source={{ uri: `${item.snippet.thumbnails.high.url}` }}
                                            style={style.video_thumb}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 2 }}>
                                            <Text style={style.video_title}> {tituloVideo[0]} </Text>
                                            <Text style={style.video_title}> {tituloVideo[1]} </Text>
                                            <Text style={style.video_date}>Transmitido em {dataTransmissao[2]}/{dataTransmissao[1]}/{dataTransmissao[0]} </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around', flex: 1 }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    Linking.openURL(`https://www.youtube.com/watch?v=${item.id.videoId}`);

                                                }}
                                            >
                                                <Icon name="youtube" size={40} />
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    handleShare(item.id.videoId)
                                                }}
                                            >
                                                <Icon name="share-2" size={40} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            </>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container_busca: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    search_text: {
        flex: 3,
        fontSize: 20,
    },
    search_button: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        color: '#0099ff'
    },
    video_title: {
        marginBottom: 5,
        paddingLeft: 15,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    },
    video_date: {
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 14,
        color: '#aaa',
        fontWeight: 'bold'
    },
    video_thumb: {
        width: windowWidth,
        height: windowWidth / 1.2,
        resizeMode: 'contain'
    },
    video_card: {
        marginBottom: 10,
        backgroundColor: '#fff'
    }
})

export default Videos