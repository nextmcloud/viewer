/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import runTest from '../mixins/oddname'

for (const [file, type] of [
	['image1.jpg', 'image/jpeg'],
	['image.gif', 'image/gif'],
	['image.png', 'image/png'],
	['image-small.png', 'image/png'],
	['image.svg', 'image/svg'],
]) {
	runTest(file, type)
}
