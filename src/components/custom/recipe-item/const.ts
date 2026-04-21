import { IRecipe } from './types'

export const RECIPES: IRecipe[] = [
	{
		id: 1,
		title: 'Big and Juicy Wagyu Beef Cheeseburger',
		desc: 'Beef burger with cheddar cheese, lettuce, tomato, and a special sauce, served on a toasted bun.',
		image: '/recipes/item-1.jpg',
		width: 368,
		height: 250,
		cookTime: 30,
		prepTime: 15,
		category: 'Snack',
		nutrionInfo: {
			calories: 800,
			totalFat: 50,
			carbohydrates: 40,
			protein: 40,
			cholesterol: 120,
		},
		ingredients: [
			{ name: 'Ground Wagyu Beef', isReady: true },
			{ name: 'Cheddar Cheese', isReady: true },
			{ name: 'Lettuce', isReady: true },
			{ name: 'Tomato', isReady: true },
		],

		instructions: [
			{
				step: 1,
				title: 'Prepare the Patties',
				desc: [
					'Divide the ground Wagyu beef into equal portions and shape them into patties.',
					'Season the patties with salt and pepper on both sides.',
				],
			},
			{
				step: 2,
				title: 'Cook the Patties',
				desc: [
					'Preheat a grill or skillet over medium-high heat.',
					'Cook the patties for about 4-5 minutes on each side, or until they reach your desired level of doneness.',
					'During the last minute of cooking, place a slice of cheddar cheese on top of each patty to melt.',
				],
			},
		],
		author: {
			name: 'John Doe',
			image: '/hero/avatar.jpg',
			date: '15 March 2022',
		},
	},

	{
		id: 2,
		title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
		desc: 'Salmon fillets marinated in lime juice and roasted to perfection, served with a tangy ginger sauce.',
		image: '/recipes/item-2.jpg',
		category: 'Fish',
		width: 368,
		height: 250,
		cookTime: 25,
		prepTime: 10,
		nutrionInfo: {
			calories: 450,
			totalFat: 25,
			carbohydrates: 10,
			protein: 40,
			cholesterol: 90,
		},
		ingredients: [
			{ name: 'Salmon Fillets', isReady: true },
			{ name: 'Lime Juice', isReady: true },
			{ name: 'Ginger', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Marinate the Salmon',
				desc: [
					'In a bowl, combine lime juice, grated ginger, salt, and pepper.',
					'Place the salmon fillets in the marinade and let them sit for at least 30 minutes.',
				],
			},
			{
				step: 2,
				title: 'Roast the Salmon',
				desc: [
					'Preheat the oven to 400°F (200°C).',
					'Place the marinated salmon fillets on a baking sheet lined with parchment paper.',
					'Roast the salmon for about 12-15 minutes, or until it flakes easily with a fork.',
				],
			},
		],
		author: {
			name: 'Jane Smith',
			image: '/hero/avatar.jpg',
			date: '20 April 2022',
		},
	},

	{
		id: 3,
		title: 'Strawberry Oatmeal Pancake with Honey Syrup',
		desc: 'Fluffy oatmeal pancakes topped with fresh strawberries and drizzled with sweet honey syrup.',
		image: '/recipes/item-3.jpg',
		category: 'Breakfast',
		width: 368,
		height: 250,
		cookTime: 20,
		prepTime: 10,
		nutrionInfo: {
			calories: 350,
			totalFat: 10,
			carbohydrates: 60,
			protein: 10,
			cholesterol: 50,
		},
		ingredients: [
			{ name: 'Oatmeal', isReady: true },
			{ name: 'Strawberries', isReady: true },
			{ name: 'Honey', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Prepare the Oatmeal',
				desc: [
					'In a saucepan, combine oatmeal with water or milk.',
					'Cook over medium heat, stirring frequently, until thick and creamy.',
				],
			},
			{
				step: 2,
				title: 'Cook the Pancakes',
				desc: [
					'Preheat a griddle or skillet over medium heat.',
					'Using a spoon, scoop the oatmeal mixture onto the griddle.',
					'Cook for about 2-3 minutes on each side, or until golden brown.',
				],
			},
		],
		author: {
			name: 'Alice Johnson',
			image: '/hero/avatar.jpg',
			date: '10 May 2022',
		},
	},

	{
		id: 4,
		title: 'Fresh and Healthy Mixed Mayonnaise Salad',
		desc: 'A refreshing salad made with a mix of fresh vegetables and a creamy mayonnaise dressing.',
		image: '/recipes/item-4.jpg',
		category: 'Healthy',
		width: 368,
		height: 250,
		cookTime: 15,
		prepTime: 10,
		nutrionInfo: {
			calories: 200,
			carbohydrates: 15,
			totalFat: 10,
			protein: 5,
			cholesterol: 30,
		},
		ingredients: [
			{ name: 'Lettuce', isReady: true },
			{ name: 'Tomato', isReady: true },
			{ name: 'Cucumber', isReady: true },
			{ name: 'Mayonnaise', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Wash the Vegetables',
				desc: ['Rinse the lettuce, tomato, and cucumber under cold water.', 'Pat them dry with a clean towel.'],
			},
			{
				step: 2,
				title: 'Prepare the Mayonnaise',
				desc: ['In a small bowl, combine the mayonnaise with a pinch of salt and pepper.', 'Mix well until smooth.'],
			},
		],
		author: {
			name: 'Bob Williams',
			image: '/hero/avatar.jpg',
			date: '5 June 2022',
		},
	},

	{
		id: 5,
		title: 'Chicken Meatballs with Cream Cheese',
		desc: 'Juicy chicken meatballs filled with creamy cheese, served with a tangy tomato sauce.',
		image: '/recipes/item-5.jpg',
		category: 'Meat',
		width: 368,
		height: 250,
		cookTime: 30,
		prepTime: 15,
		nutrionInfo: {
			calories: 300,
			totalFat: 15,
			carbohydrates: 20,
			protein: 25,
			cholesterol: 60,
		},
		ingredients: [
			{ name: 'Chicken Breast', isReady: true },
			{ name: 'Cream Cheese', isReady: true },
			{ name: 'Tomato Sauce', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Prepare the Meatballs',
				desc: [
					'In a bowl, combine ground chicken, cream cheese, salt, and pepper.',
					'Form the mixture into small balls.',
				],
			},
			{
				step: 2,
				title: 'Cook the Meatballs',
				desc: [
					'Preheat the oven to 375°F (190°C).',
					'Place the meatballs on a baking sheet lined with parchment paper.',
					'Bake for about 20-25 minutes, or until cooked through.',
				],
			},
		],
		author: {
			name: 'Bob Williams',
			image: '/hero/avatar.jpg',
			date: '5 June 2022',
		},
	},

	{
		id: 6,
		title: 'Fruity Pancake with Orange & Blueberry',
		desc: 'Delicious pancakes topped with fresh orange slices and blueberries, drizzled with maple syrup.',
		image: '/recipes/item-6.jpg',
		category: 'Sweet',
		width: 368,
		height: 250,
		cookTime: 20,
		prepTime: 10,
		nutrionInfo: {
			calories: 400,
			totalFat: 15,
			carbohydrates: 60,
			protein: 10,
			cholesterol: 30,
		},
		ingredients: [
			{ name: 'Pancake Mix', isReady: true },
			{ name: 'Orange Slices', isReady: true },
			{ name: 'Blueberries', isReady: true },
			{ name: 'Maple Syrup', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Prepare the Pancakes',
				desc: ['In a bowl, combine the pancake mix with milk and eggs.', 'Mix until smooth, without lumps.'],
			},
			{
				step: 2,
				title: 'Cook the Pancakes',
				desc: [
					'Preheat a griddle or skillet over medium heat.',
					'Pour the pancake batter onto the griddle, using about 1/4 cup for each pancake.',
					'Cook for about 2-3 minutes on each side, or until golden brown.',
				],
			},
		],
		author: {
			name: 'Alice Johnson',
			image: '/hero/avatar.jpg',
			date: '10 May 2022',
		},
	},

	{
		id: 7,
		title: 'The Best Easy One Pot Chicken and Rice',
		desc: 'A comforting one-pot meal made with tender chicken, fluffy rice, and flavorful seasonings.',
		image: '/recipes/item-7.jpg',
		category: 'Snack',
		width: 368,
		height: 250,
		cookTime: 40,
		prepTime: 15,
		nutrionInfo: {
			calories: 500,
			totalFat: 20,
			carbohydrates: 50,
			protein: 30,
			cholesterol: 80,
		},
		ingredients: [
			{ name: 'Chicken Thighs', isReady: true },
			{ name: 'Rice', isReady: true },
			{ name: 'Chicken Broth', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Sear the Chicken',
				desc: [
					'In a large pot, heat some oil over medium-high heat.',
					'Add the chicken thighs and sear them until golden brown on both sides.',
					'Remove the chicken from the pot and set it aside.',
				],
			},
			{
				step: 2,
				title: 'Cook the Rice',
				desc: [
					'In the same pot, add the rice and toast it for a couple of minutes.',
					'Pour in the chicken broth and bring it to a boil.',
					'Reduce the heat to low, cover the pot, and let it simmer for about 15 minutes.',
				],
			},
		],
		author: {
			name: 'John Doe',
			image: '/hero/avatar.jpg',
			date: '15 March 2022',
		},
	},

	{
		id: 8,
		title: 'The Creamiest Creamy Chicken and Bacon Pasta',
		desc: 'A rich and creamy pasta dish made with tender chicken, crispy bacon, and a luscious sauce.',
		image: '/recipes/item-8.jpg',
		category: 'Noodles',
		width: 368,
		height: 250,
		cookTime: 30,
		prepTime: 15,
		nutrionInfo: {
			calories: 600,
			totalFat: 30,
			carbohydrates: 50,
			protein: 35,
			cholesterol: 100,
		},
		ingredients: [
			{ name: 'Chicken Breast', isReady: true },
			{ name: 'Bacon', isReady: true },
			{ name: 'Pasta', isReady: true },
			{ name: 'Cream', isReady: true },
		],
		instructions: [
			{
				step: 1,
				title: 'Cook the Bacon',
				desc: [
					'In a skillet, cook the bacon until crispy.',
					'Remove the bacon from the skillet and set it aside on a paper towel to drain excess fat.',
				],
			},
			{
				step: 2,
				title: 'Cook the Chicken',
				desc: [
					'In the same skillet, add the chicken breast and cook until it is no longer pink in the center.',
					'Remove the chicken from the skillet and set it aside.',
				],
			},
		],
		author: {
			name: 'Jane Smith',
			image: '/hero/avatar.jpg',
			date: '20 April 2022',
		},
	},
]
