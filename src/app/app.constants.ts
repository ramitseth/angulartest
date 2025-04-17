const basePath = 'http://localhost:3000/api';

const cameraList = [{
    name: "Camera1",
    minLightLevel: 0,
    maxLightLevel: 100,
    minSubjectDistance: 0,
    maxSubjectDistance: 30
}, {
    name: "Camera2",
    minLightLevel: 100,
    maxLightLevel: 300,
    minSubjectDistance: 0,
    maxSubjectDistance: 30
}, {
    name: "Camera3",
    minLightLevel: 300,
    maxLightLevel: 500,
    minSubjectDistance: 0,
    maxSubjectDistance: 30
}, {
    name: "Camera4",
    minLightLevel: 0,
    maxLightLevel: 100,
    minSubjectDistance: 30,
    maxSubjectDistance: 60
}, {
    name: "Camera5",
    minLightLevel: 100,
    maxLightLevel: 300,
    minSubjectDistance: 30,
    maxSubjectDistance: 60
},
{
    name: "Camera6",
    minLightLevel: 300,
    maxLightLevel: 500,
    minSubjectDistance: 60,
    maxSubjectDistance: 100
}, {
    name: "Camera7",
    minLightLevel: 0,
    maxLightLevel: 100,
    minSubjectDistance: 60,
    maxSubjectDistance: 100
},
{
    name: "Camera8",
    minLightLevel: 100,
    maxLightLevel: 300,
    minSubjectDistance: 60,
    maxSubjectDistance: 100
}];

export { basePath, cameraList };