import {RectangleCornerCoordinates} from "../RectangleCornerCoordinates";
import {Point2D} from "../Point2D";

export function overlappingBoundingBox(aPos:Point2D, a:RectangleCornerCoordinates, bPos:Point2D, b:RectangleCornerCoordinates)
{
  return (aPos.x + a.left_top.x <= bPos.x + b.right_bottom.x)
	  && (aPos.x + a.right_bottom.x >= bPos.x + b.left_top.x)
	  && (aPos.y + a.left_top.y <= bPos.y + b.right_bottom.y)
	  && (aPos.y + a.right_bottom.y >= bPos.y + b.left_top.y);
}