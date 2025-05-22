import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params}) => {
    let link;

    switch (params.Member.toLowerCase()) {
        case "carlo":
            link = "https://github.com/IncredibleZuess";
            break;
        case "sebastian":
            link = "https://github.com/Vaperizer2";
            break;
    }   

    return {
        title: `${params.Member}`,
        link: link,
    };
}) satisfies PageLoad;