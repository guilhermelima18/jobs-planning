import { CardProfile } from "../../components/CardProfile";
import { HeaderNav } from "../../components/Header/HeaderNav";
import { Layout } from "../../components/Layout";
import { ProfileContent } from "./styles";

export default function Profile() {
  return (
    <>
      <HeaderNav />
      <Layout>
        <ProfileContent>
          <CardProfile />
        </ProfileContent>
      </Layout>
    </>
  );
}
