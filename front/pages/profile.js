import HEAD from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
const Profile = () => {
  const followerList = [
    { nickname: '철수' },
    { nickname: '관우0000919' },
    { nickname: '조조' },
  ];
  const followingList = [
    { nickname: '철수' },
    { nickname: '관우' },
    { nickname: '조조' },
  ];
  return (
    <>
      <HEAD>
        <title>내 프로필</title>
      </HEAD>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='팔로잉 목록' data={followingList} />
        <FollowList header='팔로워 목록' data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
