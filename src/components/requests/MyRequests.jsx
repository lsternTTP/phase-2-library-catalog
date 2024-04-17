import './MyRequests.css';
import RequestCard from './RequestCard';

export default function MyRequests(props) {
  return (
    <div className="requests">
      <h2 className="requests-h2">Requests</h2>
      <div>
        {props.myRequests.map((request) => (
          <RequestCard key={request.id} item={request} onCancelRequest={props.onCancelRequest}></RequestCard>
        )).sort()}
      </div>
    </div>
  )
};