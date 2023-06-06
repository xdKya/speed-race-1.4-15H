class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    // leia os dados e armazene o valor de playerCount
    var playerCountRef = database.ref("playerCount");
    // ler um valor no banco de dados utilizamos:
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    // atualize o playerCount toda vez que adicionar um player
    database.ref("/").update({
      playerCount: count,
    });
  }
}
