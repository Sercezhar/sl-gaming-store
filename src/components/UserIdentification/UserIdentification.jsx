import UserIdentificationAuth from './UserIdentificationAuth';
import UserIdentificationRegister from './UserIdentificationRegister';

function UserIdentification({
  isRegistered,
  setIsRegistered,
  isPassVisible,
  setIsPassVisible,
}) {

  return (
    <div>
      {isRegistered ? (
        <UserIdentificationAuth
          setIsRegistered={setIsRegistered}
          isPassVisible={isPassVisible}
          setIsPassVisible={setIsPassVisible}
        />
      ) : (
        <UserIdentificationRegister
          setIsRegistered={setIsRegistered}
          isPassVisible={isPassVisible}
          setIsPassVisible={setIsPassVisible}
        />
      )}
    </div>
  );
}

export default UserIdentification;
