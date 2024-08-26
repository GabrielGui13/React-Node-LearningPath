class Place {
	constructor(title, imageUri, address, location) {
		this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat, 0.1212423, lng, 12.2398462 }
		this.id = new Date().toString() + Math.random().toString();
	}
}