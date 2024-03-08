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
export const ADMIN_SIDEBAR_LINKS = [
	{
		key: 1,
		label: 'Dashboard',
		path: '/dashboard/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key:2,
		label: 'Leave Approval',
		path: '/dashboard/admin/leaveapproval',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 3,
		label: 'Add Users',
		path: '/dashboard/admin/addUser',
		icon: <HiOutlineUsers />
	}
]
export const EMPLOYEE_SIDEBAR_LINKS = [
	{
		key: 1,
		label: 'Dashboard',
		path: '/dashboard/employee',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 2,
		label: 'Apply leave',
		path: '/dashboard/employee/applyleave',
		icon: <HiOutlineCube />
	},
	{
		key:3,
		label: 'Leave Record',
		path: '/dashboard/employee/leaveRecord',
		icon: <HiOutlineShoppingCart />
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