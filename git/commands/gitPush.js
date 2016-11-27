/**
 * @since 2016-11-22 21:20
 * @author vivaxy
 */

import execa from '../../lib/wrappedExeca';

import getRemote from '../status/getRemote';
import getBranch from '../status/getBranch';
import checkRemoteDiffer from '../status/checkRemoteDiffer';

export default async() => {
    if (await checkRemoteDiffer()) {
        throw new Error(`remote differ, please pull changes`);
    }

    const branch = await getBranch();
    const remote = await getRemote();

    return await execa(`git`, [`push`, remote, branch, `--tag`]);
};
