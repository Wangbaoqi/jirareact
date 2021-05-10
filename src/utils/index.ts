import { useState, useEffect } from "react"



export const isFalsy = (val: any) => val === 0 ? false : !val



export const cleanObject = (object: object) => {

  const result = {...object}

  Object.keys(result).map(key => {
    // @ts-ignore
    if(isFalsy(result[key])) {
      // @ts-ignore
      delete result[key]
    }
  })

  return result
}




const debounce = (func: () => void, delay: number) => {
  let time: NodeJS.Timeout;
  return () => {
    if(time) clearTimeout(time);
    time = setTimeout(() => {
      func()
    }, delay)
  }
}



export const useDebounce = <V>(value: V, delay: number) => {

  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value)
    }, delay);
    return () => clearTimeout(time)
  }, [value, delay]);

  return debounceValue
}

// customHook and 泛型
export const useArray = <S>(initArray: S[]) => {

  const [value, setValue] = useState(initArray);

  const removeIndex = (id: number) => {
    let copy = [...value];
    copy.slice(id, 1);
    setValue(copy)
  }

  return {
    value,
    setValue,
    clear: () => setValue([]),
    add: (item: S) => setValue([...value, item]),
    removeIndex
  }
}