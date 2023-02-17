import React from 'react';
import { View, Image, Text, SectionList, TouchableOpacity } from 'react-native';

import FileColletor from './fileCollector';
import Cropper from './cropper';

class UploadFiles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                isHeader: true,
                data: ["Pizza"]
            },
            {
                isHeader: false,
                data: ["French Fries"]
            }],
            selectedImageData: ''
        };

        this.cropper = React.createRef()
    }

    onSelectImage = (data) => {
        const { node } = data;
        this.setState({ selectedImageData: node });
        this.props.onSelectImage(data);
    }

    onCropped = () => {
        console.log("=this.cropper.current.=");
        const a =this.cropper.current.crop()
        console.log("==a",a);
        if(a){
            this.props.onCropped(a);
        }
        // this.cropper.current.crop().then((cropImageUri) => {
        //     this.props.onCropped(cropImageUri);
        // });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <View style={{ alignItems: 'center', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, backgroundColor: 'rgba(100, 100, 100, 0.2)' }}>
                    <View style={{ marginLeft: 10, flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => this.props.onClose()}>
                            <Image
                                style={{ width: 25, height: 25, tintColor: '#FFFFFF' }}
                                resizeMode={'contain'}
                                source={require('./assets/close.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 25, color: '#FFFFFF', fontSize: 20, fontWeight: '500' }}>{this.props.headerTitle ? this.props.headerTitle : 'New Post'}</Text>
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity onPress={() => this.onCropped()}>
                            <Image
                                style={{ width: 35, height: 35, tintColor: '#3e50f0' }}
                                resizeMode={'contain'}
                                source={require('./assets/forward.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <SectionList
                        showsVerticalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        sections={this.state.data}
                        keyExtractor={(item, index) => item + index}
                        renderSectionHeader={({ section }) => (
                            section.isHeader && this.state.selectedImageData ? (
                                <Cropper ref={this.cropper} imageData={this.state.selectedImageData} />
                            ) : null
                        )}
                        renderItem={({ item, section, index }) => (!section.isHeader ? (<FileColletor onSelectImage={this.onSelectImage} />) : null)}
                    />
                </View>
            </View>
        )
    }
}

export default UploadFiles;

