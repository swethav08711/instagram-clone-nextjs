import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  
  return (
    <main>
        <section>
            {/* stories */}
            <Stories />
            {/* post */}
            <Posts/>
        </section>
        <section>
            {/* mini profile */}
            {/* suggestions */}
        </section>
    </main>
  )
}
