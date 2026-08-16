import { westernZodiacSigns } from "../constants";
import Zodiac from "./zodiac";

type zdmsType = {
  sign: Zodiac;
  degree: number;
  minute: number;
  second: number;
};

/**
 * Where "DMS" normally stands for "degrees", "minutes", "seconds",
 * I added the suffix "Z" for "Zodiac" and have some degree
 * math happening in here!
 */
export default class ZDMS {
  /** Zodiac sign */
  sign;
  /** 0 - 29 */
  degree;
  /** 0 - 59 */
  minute;
  /** 0 - 59 */
  second;

  constructor(args:zdmsType) {
    this.sign = args.sign;
    this.degree = args.degree;
    this.minute = args.minute;
    this.second = args.second;
  };

  public logZDMS() {
    console.log(`ZDMS: ${this.sign.label} ${this.degree}°${this.minute}'${this.second}"`);
  };

  public incrementDMS(d:number=0, m:number=0, s:number=0) {
    let increment = this.getIncrementZDMS(d,m,s);
    this.sign = increment.sign;
    this.degree = increment.degree;
    this.minute = increment.minute;
    this.second = increment.second;
  };

  public incrementSign(by:number) {
    this.sign = westernZodiacSigns.find((sign) => {return sign.orderIdx === ((this.sign.orderIdx + by) % 12)}) || this.sign;
  };

  /**
   * Lets you increment a ZDMS value, both backwards and forwards
   * @param {number} [d] degree to increment by
   * @param {number} [m] minute to increment by
   * @param {number} [s] second to increment by
   * @returns {zdmsType} a new ZDMS value; does not modify our values
   */
  public getIncrementZDMS(d:number=0, m:number=0, s:number=0): zdmsType {
    // STEP 1: Increment each value
    let newS = this.second += s;
    let newM = this.minute += m;
    let newD = this.degree += d;
    let newZidx = this.sign.orderIdx;
    
    // STEP 2: Start with the smallest (second). If it is not within
    // its boundaries, add/subtract from the larger unit (minute).
    // Repeat for minute and degree.
    if (newS >= 60 || newS < 0) {
      newM += Math.floor(newS/60);
      newS = newS % 60;
    }
    if (newM >= 60 || newM < 0) {
      newD += Math.floor(newM/60);
      newM = newM % 60;
    }
    if (newD >= 30  || newD < 0) {
      newZidx += Math.floor(newD/30);
      newD = newD % 30;
    }
    
    // STEP 3: Return a fresh zdmsType, including the sign
    // we calculated the index of in step 2
    return {
      sign: westernZodiacSigns.find(sign => sign.orderIdx == (newZidx % 12)) || this.sign,
      degree: newD,
      minute: newM,
      second: newS
    };
  };

  /**
   * @param {number} [d=0] degree
   * @param {number} [m=0] minute
   * @param {number} [s=0] second
   * @returns {boolean} whether or not the zdms is greater 
   * than the passed in degree
   */
  public greaterThan(d:number=0, m:number=0, s:number=0): boolean {
    if (d == this.degree) {
      if (m == this.minute) {
        if (s == this.second) {
          return false;
        }
      }
      return m < this.minute;
    }
    return d < this.degree;
  };

  /**
   * @param {number} [d=0] degree
   * @param {number} [m=0] minute
   * @param {number} [s=0] second
   * @returns {boolean} whether or not the zdms is greater 
   * than or equal to the passed in degree
   */
  public greaterThanEqual(d:number=0, m:number=0, s:number=0): boolean {
    if (d == this.degree) {
      if (m == this.minute) {
        if (s == this.second) {
          return true;
        }
      }
      return m < this.minute;
    }
    return d < this.degree;
  };

  /**
   * (Vedic Astrology, Whole Sign house system) 
   * The D9 divides the 360 degrees of the 12 Zodiac
   * into 9 even 3°20' segments. These segments are called
   * Navamsa (Nav = 9, amsa = unit), shortened to D9.
   * @returns {Zodiac} the D9 sign
   */
  public getD9(): Zodiac {
    let startingIdx = this.sign.orderIdx * 9 % 12;
		let d9 = new ZDMS({
			sign: westernZodiacSigns.find(z => z.orderIdx === startingIdx) || this.sign,
			degree: 3,
			minute: 19,
			second: 0,
		});
		while (!d9.greaterThanEqual(this.degree,this.minute,this.second)) {
			d9.incrementDMS(3,20);
			d9.incrementSign(1);
		}
		return d9.sign;
	};

  /**
   * (Vedic Astrology, Whole Sign house system) 
   * The D12 divides the 30 degrees of the Zodiac
   * into 12 even 2.5 degree segments. These segments are called
   * Dwadasamsa (Dwadasa = 12, amsa = unit), shortened to dwad/duad,
   * or even further to D12.
   * @returns {Zodiac} the D12 sign
   */
  public getD12(): Zodiac {
		let d12 = new ZDMS({
			sign: this.sign,
			degree: 2,
			minute: 29,
			second: 0,
		});
		while (!d12.greaterThanEqual(this.degree,this.minute,this.second)) {
			d12.incrementDMS(2,30);
			d12.incrementSign(1);
		}
		return d12.sign;
	};
};