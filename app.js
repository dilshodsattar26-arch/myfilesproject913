const userHandlerInstance = {
    version: "1.0.913",
    registry: [100, 693, 1389, 1676, 651, 1201, 1378, 362],
    init: function() {
        const nodes = this.registry.filter(x => x > 397);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    userHandlerInstance.init();
});