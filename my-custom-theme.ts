import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ca9ee6
		'--color-primary-50': '247 240 251', // #f7f0fb
		'--color-primary-100': '244 236 250', // #f4ecfa
		'--color-primary-200': '242 231 249', // #f2e7f9
		'--color-primary-300': '234 216 245', // #ead8f5
		'--color-primary-400': '218 187 238', // #dabbee
		'--color-primary-500': '202 158 230', // #ca9ee6
		'--color-primary-600': '182 142 207', // #b68ecf
		'--color-primary-700': '152 119 173', // #9877ad
		'--color-primary-800': '121 95 138', // #795f8a
		'--color-primary-900': '99 77 113', // #634d71
		// secondary | #babbf1
		'--color-secondary-50': '245 245 253', // #f5f5fd
		'--color-secondary-100': '241 241 252', // #f1f1fc
		'--color-secondary-200': '238 238 252', // #eeeefc
		'--color-secondary-300': '227 228 249', // #e3e4f9
		'--color-secondary-400': '207 207 245', // #cfcff5
		'--color-secondary-500': '186 187 241', // #babbf1
		'--color-secondary-600': '167 168 217', // #a7a8d9
		'--color-secondary-700': '140 140 181', // #8c8cb5
		'--color-secondary-800': '112 112 145', // #707091
		'--color-secondary-900': '91 92 118', // #5b5c76
		// tertiary | #85c1dc
		'--color-tertiary-50': '237 246 250', // #edf6fa
		'--color-tertiary-100': '231 243 248', // #e7f3f8
		'--color-tertiary-200': '225 240 246', // #e1f0f6
		'--color-tertiary-300': '206 230 241', // #cee6f1
		'--color-tertiary-400': '170 212 231', // #aad4e7
		'--color-tertiary-500': '133 193 220', // #85c1dc
		'--color-tertiary-600': '120 174 198', // #78aec6
		'--color-tertiary-700': '100 145 165', // #6491a5
		'--color-tertiary-800': '80 116 132', // #507484
		'--color-tertiary-900': '65 95 108', // #415f6c
		// success | #a6d189
		'--color-success-50': '242 248 237', // #f2f8ed
		'--color-success-100': '237 246 231', // #edf6e7
		'--color-success-200': '233 244 226', // #e9f4e2
		'--color-success-300': '219 237 208', // #dbedd0
		'--color-success-400': '193 223 172', // #c1dfac
		'--color-success-500': '166 209 137', // #a6d189
		'--color-success-600': '149 188 123', // #95bc7b
		'--color-success-700': '125 157 103', // #7d9d67
		'--color-success-800': '100 125 82', // #647d52
		'--color-success-900': '81 102 67', // #516643
		// warning | #e5c890
		'--color-warning-50': '251 247 238', // #fbf7ee
		'--color-warning-100': '250 244 233', // #faf4e9
		'--color-warning-200': '249 241 227', // #f9f1e3
		'--color-warning-300': '245 233 211', // #f5e9d3
		'--color-warning-400': '237 217 177', // #edd9b1
		'--color-warning-500': '229 200 144', // #e5c890
		'--color-warning-600': '206 180 130', // #ceb482
		'--color-warning-700': '172 150 108', // #ac966c
		'--color-warning-800': '137 120 86', // #897856
		'--color-warning-900': '112 98 71', // #706247
		// error | #e78284
		'--color-error-50': '251 236 237', // #fbeced
		'--color-error-100': '250 230 230', // #fae6e6
		'--color-error-200': '249 224 224', // #f9e0e0
		'--color-error-300': '245 205 206', // #f5cdce
		'--color-error-400': '238 168 169', // #eea8a9
		'--color-error-500': '231 130 132', // #e78284
		'--color-error-600': '208 117 119', // #d07577
		'--color-error-700': '173 98 99', // #ad6263
		'--color-error-800': '139 78 79', // #8b4e4f
		'--color-error-900': '113 64 65', // #714041
		// surface | #303446
		'--color-surface-50': '224 225 227', // #e0e1e3
		'--color-surface-100': '214 214 218', // #d6d6da
		'--color-surface-200': '203 204 209', // #cbccd1
		'--color-surface-300': '172 174 181', // #acaeb5
		'--color-surface-400': '110 113 126', // #6e717e
		'--color-surface-500': '48 52 70', // #303446
		'--color-surface-600': '43 47 63', // #2b2f3f
		'--color-surface-700': '36 39 53', // #242735
		'--color-surface-800': '29 31 42', // #1d1f2a
		'--color-surface-900': '24 25 34' // #181922
	}
};
