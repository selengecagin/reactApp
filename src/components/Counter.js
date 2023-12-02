import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ start = 0, name = "" }) => {
  const [adet, setAdet] = useState(start);
  const [taneFiyat, setTaneFiyat] = useState(15);
  const [toplamFiyat, setToplamFiyat] = useState(start * taneFiyat);
  const [boyut, setBoyut] = useState("sm"); //sm md lg

  const sayacArttir = () => {
    setAdet(adet + 1);
  };

  const sayacAzalt = () => {
    setAdet(adet - 1);
  };

  const sifirla = () => {
    setAdet(0);
  };

  const yuzVerdim = () => {
    setAdet(100);
  };

  useEffect(() => {
    if (boyut === "sm") {
      setToplamFiyat(taneFiyat * adet * 0.8);
    } else if (boyut === "lg") {
      setToplamFiyat(taneFiyat * adet * 1.2);
    } else {
      setToplamFiyat(taneFiyat * adet);
    }
  }, [adet, taneFiyat, boyut]); //fiyat hem tane hem adeta bağlı bir değişken +boyuta bağlı

  //component load - componentDidMount
  useEffect(() => {
    console.log(
      name +
        " componenti didMount oldu, yani yüklendi, yani browsera monte edildi"
    );

    //component will unmount - component silindi - component ekrandan kaldırıldı
    return () => {
      console.log(
        name +
          " componenti willUnMount oldu, yani silinmek üzere, yani browserdan kaldırılacak"
      );
    };
  }, []);

  //component update - componentDidUpdate - component rerender

  useEffect(() => {
    console.log(
      name + " componenti didUpdate oldu, yani güncellendi, yani rerender oldu"
    );
  });

  useEffect(() => {
    //adet değeri değiştikten sonra burası tetiklenir
    console.log("Değişen adet değeri: ", adet);
    return () => {
      //adet değeri değişmeden önce burası tetiklenir ve adetin eski değerini burada yazdırır.
      console.log("Değişecek adet değeri: ", adet);
    };
  }, [adet]);

  return (
    <>
      <label>
        Yumurta Tane Fiyat:
        <input
          type="number"
          onChange={(e) => setTaneFiyat(Number(e.target.value))}
          value={taneFiyat}
        />
      </label>

      <label>
        <select onChange={(e) => setBoyut(e.target.value)} value={boyut}>
          <option value="sm">küçük</option>
          <option value="md">orta</option>
          <option value="lg">büyük</option>
        </select>
      </label>

      <CounterDisplay
        name={name}
        counter={adet}
        sayacArttir={sayacArttir}
        sayacAzalt={sayacAzalt}
        sifirla={sifirla}
        yuzVerdim={yuzVerdim}
        fiyat={toplamFiyat}
      />
    </>
  );
};
// sadece 1 tane nesne default export edilebilir
export default Counter;

export const PI = 3.141516;

export const arr = [1, 3, 5, 7, 9];
