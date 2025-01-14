/**
 * This helper function assists in returning the type of layer the application is 
 * dealing with.
 */

const getDisplayType = (data) => {
    if (data.type === 'FeatureCollection') {
        switch (data.features[0].geometry.type) {
            case 'Point':
            case 'MultiPoint':
                return 'Point';
            case 'Line':
            case 'LineString':
            case 'MultiLineString':
                return 'Line';
            case 'Polygon':
            case 'MultiPolygon':
                return 'Polygon';
            default:
                return 'Polygon';
        }
    } else if (data.type === 'Feature') {
        switch (data.geometry.type) {
            case 'Point':
            case 'MultiPoint':
                return 'Point';
            case 'Line':
            case 'LineString':
            case 'MultiLineString':
                return 'Point';
            case 'Polygon':
            case 'MultiPolygon':
                return 'Polygon';
            default:
                return 'Polygon';
        }
    }
    else {
        return 'Polygon'
    }
}

export default getDisplayType;