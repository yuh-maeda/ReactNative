import { Link } from "expo-router";
import { CaretRight, Gear, MagnifyingGlass } from "phosphor-react-native";
import {
    Dimensions,
    Image,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const { height } = Dimensions.get("window");

export default function Index() {
    return (
        <View className="flex-1 bg-[#F77764]">
            <StatusBar barStyle="dark-content" />

            <View className="flex-row justify-between items-center pt-3 px-8 mb-4">
                <Text className="text-white text-3xl font-bold">Pokédex</Text>
                <Gear size={32} color="#FFF" />
            </View>

            <Text className="text-white text-xl px-8">
                Encontre seu pokemon pesquisando pelo nome ou por seu Código Pokédex.
            </Text>

            <View className="flex-row gap-4 bg-[#F98E80] py-2 px-4 rounded-lg mx-8 my-4 items-center">
                <MagnifyingGlass size={25} color="#FFF" />
                <TextInput
                    className="flex-1 text-white"
                    placeholder="Pesquisar"
                    placeholderTextColor="#FFF"
                />
            </View>

            <View className="flex-1 bg-white pt-4 px-4 rounded-t-2xl">
                <Text className="text-black text-2xl mb-4 font-bold">Todos os pokemons</Text>
                <View className="bg-white flex-row items-center shadow shadow-black justify-between" >
                    <View className=" flex-row items-center gap-2">
                        <Image
                            className="w-40 h-40"
                            source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }}
                        />
                        <View>
                            <Text>#001</Text>
                            <Text>nome</Text>
                        </View>
                    </View>
                    <Link href={{
                        pathname: "/pokemon/[id]",
                        params: {
                            id:2
                        }
                    }}>
                        <CaretRight size={32} />
                    </Link>

                </View>

                {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.name}
                    data={pokemon}
                    renderItem={({ item, index }) => (
                        <Pressable onPress={() => toggleModal(item.name)}>
                            <View className="flex-row bg-white items-center p-4 justify-between rounded-md mb-4 border border-[#F2F2F2]">
                                <View className="flex-row gap-2 items-center">
                                    <Image
                                        style={{ width: 80, height: 50 }}
                                        source={{ uri: item.image }}
                                    />
                                    <View>
                                        <Text>#{index + 1}</Text>
                                        <Text>{item.name}</Text>
                                    </View>
                                </View>

                                <CaretRight size={32} />
                            </View>
                        </Pressable>
                    )}
                /> */}
            </View>

            <View className="bg-white border-t border-[#F2F2F2] p-5 items-center justify-center">
                <TouchableOpacity className="w-full py-5 items-center rounded-md bg-[#F77764]">
                    <Text className="text-white">Conhecer um pokemon</Text>
                </TouchableOpacity>
                {/* <Pressable
                    disabled={search ? false : true}
                    onPress={() => console.log("Oi")}
                    className={`w-full py-5 items-center rounded-md ${search ? "bg-[#F7776A]" : "bg-[#DADADA]"
                        }`}
                >
                    <Text className="text-white">Conhecer um pokemon</Text>
                </Pressable> */}
            </View>

            {/* <Modal
                isVisible={isToggleModal}
                onBackdropPress={() => toggleModal()}
                swipeDirection="down"
                onSwipeComplete={() => toggleModal()}
                style={{ justifyContent: "flex-end", margin: 0 }}
            >
                <View className="bg-white rounded-t-2xl py-5 px-6 h-[80%]">
                    <Pokemon name={selectedPokemon} />
                </View>
            </Modal> */}
        </View>
    );
}
