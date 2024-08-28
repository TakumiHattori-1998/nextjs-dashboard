import EnterForm from '@/app/ui/suggestion/enter-form';
import ShowCandidates from '@/app/ui/suggestion/show-candidates';

export default function Page() {
    return(
        <div>
            {<EnterForm />}
            {<ShowCandidates />}
            {/* <img src={`/${pngFile}`} alt="" style={{ width: '200px', height: 'auto' }}/> */}
        </div>
    );
}