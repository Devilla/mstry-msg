import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
} from "@react-email/components"

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({username, otp}
    : VerificationEmailProps
){
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/robot/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: "woff2"
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                >
                </Font>
            </Head>
            <Preview>
                Here&apos;s your Verification code: {otp} 
            </Preview>
            <Section>
                <Row>
                    <Heading as="h2">
                        Hello, {username}
                    </Heading>
                </Row>
                <Row>
                    Thanks, for registering! Please use the following code for registration.
                </Row>
                <Row>
                    <Text>
                        {otp}
                    </Text>
                </Row>
            </Section>
        </Html>
    )
}