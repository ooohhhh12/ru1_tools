/**
 * 平铺数组转换为树状结构
 * @param arr 所转列表
 */
export function tranListToTreeData(arr) {
    // 定义两个变量
    const treeArr: any = [];
    const map = {};
    // 建立映射关系 给对象添加children
    arr.forEach((item) => {
        item.children = [];
        map[item.orgBn] = item;
    });
    // console.log(map);
    arr.forEach((item) => {
        // 对arr进行循环，对每一个元素item筛选 根据item.pid查找 如果有上级元素，就添加到上级的children里面
        // 如果没有上级元素 就直接添加到treeArr
        const pItem = map[item.parentBn];
        if (pItem) {
        pItem.children.push(item);
        } else {
        treeArr.push(item);
        }
    });
    return treeArr;
}
/**
 * 根据每项的parent_id，生成具体树形结构的对象
 * @param items 所操作数组
 * @param id 标识值
 * @param link 父编码
 * @returns 
 */
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));

/**
 * 去重
 * @param arr 
 */
export const removeDuplicates = (arr) => {
    arr = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}
export const removeDuplicates1 = (arr) => [...new Set(arr)];





//   vben tools
// 默认配置
const DEFAULT_CONFIG = {
    id: 'id',
    children: 'children',
    pid: 'pid',
  };
const getConfig = (config) => Object.assign({}, DEFAULT_CONFIG, config);

// tree from list
// 列表中的树
export function listToTree<T = any>(list: any[], config = {}): T[] {
    const conf = getConfig(config);
    const nodeMap = new Map();
    const result: T[] = [];
    const { id, children, pid } = conf;
  
    for (const node of list) {
      node[children] = node[children] || [];
      nodeMap.set(node[id], node);
    }
    for (const node of list) {
      const parent = nodeMap.get(node[pid]);
      (parent ? parent[children] : result).push(node);
    }
    return result;
}
  
export function treeToList<T = any>(tree: any, config): T[] {
    config = getConfig(config);
    const { children } = config;
    const result: any = [...tree];
    for (let i = 0; i < result.length; i++) {
      if (!result[i][children!]) continue;
      result.splice(i + 1, 0, ...result[i][children!]);
    }
    return result;
}

export function findNode<T = any>(
    tree: any,
    func,
    config,
  ): T | null {
    config = getConfig(config);
    const { children } = config;
    const list = [...tree];
    for (const node of list) {
      if (func(node)) return node;
      node[children!] && list.push(...node[children!]);
    }
    return null;
}
  
export function findNodeAll<T = any>(
  tree: any,
  func,
  config,
  ): T[] {
    config = getConfig(config);
    const { children } = config;
    const list = [...tree];
    const result: T[] = [];
    for (const node of list) {
      func(node) && result.push(node);
      node[children!] && list.push(...node[children!]);
    }
    return result;
}
  
export function findPath<T = any>(
 tree: any,
 func,
 config,
): T | T[] | null {
 config = getConfig(config);
 const path: T[] = [];
 const list = [...tree];
 const visitedSet = new Set();
 const { children } = config;
 while (list.length) {
    const node = list[0];
    if (visitedSet.has(node)) {
        path.pop();
        list.shift();
    } else {
        visitedSet.add(node);
        node[children!] && list.unshift(...node[children!]);
        path.push(node);
     if (func(node)) {
        return path;
     }
    }
}
    return null;
}

export function findPathAll(tree: any, func, config) {
config = getConfig(config);
const path: any[] = [];
const list = [...tree];
const result: any[] = [];
const visitedSet = new Set(),
    { children } = config;
while (list.length) {
    const node = list[0];
    if (visitedSet.has(node)) {
    path.pop();
    list.shift();
    } else {
    visitedSet.add(node);
    node[children!] && list.unshift(...node[children!]);
    path.push(node);
    func(node) && result.push([...path]);
    }
}
return result;
}