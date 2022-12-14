// 1. Objects / Functions
// Both can be used to describe the shape of an object or a function signature. But the syntax differs.

interface PointI {
    x: number;
    y: number;
}

interface SetPointI {
    (x: number, y: number): void;
}

type PointT = {
    x: number;
    y: number;
};

type SetPointT = (x: number, y: number) => void;

// 2. Other Types
// Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.

// Primitive
type Name = string;

// Object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// Union
type PartialPoint = PartialPointX | PartialPointY;

// Tuple
type Data = [number, string];

// 3. Extend
// Both can be extended, but again, the syntax differs.Additionally, note that an interface and type alias are not mutually exclusive.An interface can extend a type alias, and vice versa.

// Interface extends interface
interface PartialPointXX { x: number; }
interface PointII extends PartialPointXX { y: number; }

// Type alias extends type alias
type PartialPointXXX = { x: number; };
type PointTT = PartialPointXXX & { y: number; };

// Interface extends type alias
type PartialPointXXXX = { x: number; };
interface PointIII extends PartialPointXXXX { y: number; }

// Type alias extends interface
interface PartialPointXXXXX { x: number; }
type PointTTT = PartialPointXXXXX & { y: number; };

// 4. Implements
// A class can implement an interface or type alias, both in the same exact way.Note however that a class and interface are considered static blueprints.Therefore, they can not implement / extend a type alias that names a union type.

interface Point {
    x: number;
    y: number;
}

class SomePoint implements Point {
    x = 1;
    y = 2;
}

type Point2 = {
    x: number;
    y: number;
};

class SomePoint2 implements Point2 {
    x = 1;
    y = 2;
}

type PartialPointT = { x: number; } | { y: number; };

// FIXME: can not implement a union type
// class SomePartialPoint implements PartialPointT {
//     x = 1;
//     y = 2;
// }

// 5. Declaration merging
// Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface(with members of all declarations being merged).

// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };