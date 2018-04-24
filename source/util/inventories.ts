import {Player} from "../../api/Player";
import {defines} from "../../api/defines/inventory";
import {ItemType} from "../../api/ItemType";
import {Inventory} from "../../api/Inventory";

const inventory_types = [
	defines.inventory.player_quickbar,
	defines.inventory.player_main
];

export namespace Inventories
{
	export function get_all_inventories(player: Player): Inventory[]
	{
		let result: Inventory[] = [];
		for (const type of inventory_types)
		{
			result.push(player.get_inventory(type));
		}
		return result;
	}


	export function total_craftable_count(player: Player, item_type: ItemType): number
	{
		let inventories = get_all_inventories(player);
		let result = 0;
		for (const inventory of inventories)
		{
			result += inventory.get_item_count(item_type);
		}

		return result;
	}
}





