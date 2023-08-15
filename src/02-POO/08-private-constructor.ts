// em algumas situações só é desejado possuir uma instância de uma classe, como nos casos de DBs
// nestes casos, é necessário que se retorne a instância criada ou a resposta que já existe
// instância para a classe específica, não criando novamente

// Singleton - GoF | Factory Method GoF

// cria-se um constructor privado
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Database já existe. Retornando instância já criada.');
      return Database.database;
    }
    console.log('Database não existe. Criando nova instância.');

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// const db1 = new Database('localhost', 'root', '123456'); -> vai apresentar erro
// db1.connect();

// const db2 = new Database('localhost', 'root', '123456'); -> vai apresentar erro
// db2.connect();
// console.log(db1 === db2) -> retorna false

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '1234');
db2.connect();

console.log(db1 === db2);
