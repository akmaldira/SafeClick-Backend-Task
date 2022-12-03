module.exports = mongoose => {
    const data = mongoose.Schema(
        {
            cpuname: {type: String, required: [true, "CPU Name is required"]},
            type: {type: String, required: [true, "Type is required"]},
            platform: {type: String, required: [true, "Platform is required"]},
            release: {type: String, required: [true, "Release is required"]},
            remainingRam: {type: Number, required: [true, "Remaining RAM is required"]},
            totalRam: {type: Number, required: [true, "Total RAM is required"]},
        }, {
            timestamps: true,
        }
    );

    mongoose.pluralize(null);

    return mongoose.model('data', data);
}