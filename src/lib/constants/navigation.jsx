import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { CiLogout } from "react-icons/ci";
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 1,
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 2,
		label: 'Apply leave',
		path: '/dashboard/applyleave',
		icon: <HiOutlineCube />
	},
	{
		key:3,
		label: 'Orders',
		path: '/dashboard/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 4,
		label: 'Customers',
		path: '/dashboard/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 5,
		label: 'Transactions',
		path: '/dashboard/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 6,
		label: 'Messages',
		path: '/dashboard/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'logout',
		label: 'logout',
		path: '/logout',
		icon: <CiLogout />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]