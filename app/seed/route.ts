
import { db } from '@vercel/postgres';
import { patients, doctors, messages, contents, files} from './placeholder-data';

const client = await db.connect();

async function seedPatients() {
   
  const insertedUsers = await Promise.all(
     patients.map(async (user) => {
       return client.sql`
         INSERT INTO patients (id, name, age, sex, address, password)
         VALUES (${user.id}, ${user.name}, ${user.age}, ${user.sex}, ${user.address}, ${user.password})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );

   return insertedUsers;
 }

async function seedDoctors() {
   
  const insertedUsers = await Promise.all(
     doctors.map(async (user) => {
       return client.sql`
         INSERT INTO doctors (id, name, speciality, age, sex, education, bio)
         VALUES (${user.id}, ${user.name}, ${user.speciality}, ${user.age}, ${user.sex}, ${user.education}, ${user.bio})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );

   return insertedUsers;
 }
 
async function seedMessages() {
   
  const insertedUsers = await Promise.all(
     message.map(async (user) => {
       return client.sql`
         INSERT INTO messages (id, date, sender, reciever, content)
         VALUES (${user.id}, NOW(), ${user.sender}, ${user.reciever}, ${user.content})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );

   return insertedUsers;
 }
 
 
async function seedContents() {
   
  const insertedUsers = await Promise.all(
     contents.map(async (user) => {
       return client.sql`
         INSERT INTO to_read (id, title, content, category)
         VALUES (${user.id}, ${user.title}, ${user.content}, ${user.category})
         ON CONFLICT (id) DO NOTHING;
       `;
     }),
   );

   return insertedUsers;
 }
 

export async function GET() {
  
   try {
     await client.sql`BEGIN`;
     //await seedPatients();
	 //await seedDoctors();
	 //await seedMessages();
	 //await seedContents();
     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
