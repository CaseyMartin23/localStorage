export const genericApi = <T extends {}>(name: string) => {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, "{}");
  }
  let db: { [index: string]: T } = JSON.parse(
    localStorage.getItem(name) || "{}"
  );
  return {
    all() {
      return Promise.resolve(Object.values(db));
    },
    findBy<K extends keyof T>(key: K, value: T[K]) {
      return Promise.resolve(
        Object.values(db).find(item => {
          return item[key] === value;
        })
      );
    },
    filterBy<K extends keyof T>(key: K, value: T[K]) {
      return Promise.resolve(
        Object.values(db).filter(item => {
          return item[key] === value;
        })
      );
    },
    create(item: T) {
      return new Promise((resolve, reject) => {
        try {
          const id = Math.floor(new Date().valueOf() * Math.random());
          db[id] = {
            ...item,
            id
          };
          localStorage.setItem(name, JSON.stringify(db));
          return resolve(id);
        } catch (e) {
          return reject(e);
        }
      });
    },
    update(id: string, item: T) {
      return new Promise((resolve, reject) => {
        try {
          const updated = { ...db[id], ...item };
          db[id] = updated;
          localStorage.setItem(name, JSON.stringify(db));
          return resolve(updated);
        } catch (e) {
          return reject(e);
        }
      });
    },
    remove(id: string) {
      return new Promise((resolve, reject) => {
        try {
          db = Object.keys(db).reduce((without, todoId) => {
            if (id == todoId) {
              return without;
            }
            return {
              ...without,
              [todoId]: db[todoId]
            };
          }, {});
          localStorage.setItem(name, JSON.stringify(db));
          return resolve();
        } catch (e) {
          return reject(e);
        }
      });
    }
  };
};
