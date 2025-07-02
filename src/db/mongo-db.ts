import {MongoClient, Db, Collection} from 'mongodb'
import {BlogViewModel, PostViewModel} from "./db-blogs-and-posts";
import {SETTINGS} from "./mongo-settings";

const blogs_collectionn = 'blogs';
const posts_collectionn = 'posts';

export let client: MongoClient;
export let postsCollection: Collection<PostViewModel>;
export let blogsCollection: Collection<BlogViewModel>;

export async function run(url: string): Promise<void> {
    try {
        client = new MongoClient(url);
        const db: Db = client.db(SETTINGS.name);

        blogsCollection = db.collection<BlogViewModel>(blogs_collectionn);
        postsCollection = db.collection<PostViewModel>(posts_collectionn);


        await client.connect();
        await db.command({ping: 1});
        console.log('✅ Connected to the database');
    }
    catch(err) {
        await client.close();
        throw  new Error(`❌ Database not connected: ${err}`)
    }
}