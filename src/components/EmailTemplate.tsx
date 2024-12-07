import { data } from "@/data/data";

function EmailTemplate({ name }: { name: string }) {
  const styles = {
    table: {
      margin: "auto",
      maxWidth: "80%",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      backgroundImage:
        "linear-gradient(167deg, rgba(65,67,74,1) 0%, rgba(0,4,15,1) 100%, rgba(180,198,250,1) 100%)",
      padding: "20px 0",
      color: "#fff",
      textAlign: "center" as const,
      fontSize: "24px",
      lineHeight: "1.5",
    },
    content: {
      padding: "20px",
      fontSize: "16px",
      lineHeight: "1.5",
      color: "#000",
    },
    footer: {
      backgroundImage:
        "linear-gradient(167deg, rgba(65,67,74,1) 0%, rgba(0,4,15,1) 100%, rgba(180,198,250,1) 100%)",
      color: "#fff",
      padding: "10px",
      fontSize: "14px",
      textAlign: "center" as const,
    },
  };

  return (
    <table style={styles.table}>
      <tr>
        <td style={styles.header}>
          <h1
            style={{
              marginLeft: "1rem",
              fontWeight: "bold",
              fontSize: "1.125rem",
            }}
          >
            Sandeep Amarnath
          </h1>
        </td>
      </tr>
      <tr>
        <td style={styles.content}>
          <p>
            Hi {name},
            <br />
            <br />
            <p>{data.email_template[0]}</p>
            <p>{data.email_template[1]}</p>
            <br />
            <br />
            <p>{data.email_template[2]}</p>
            <p>{data.email_template[3]}</p>
          </p>
        </td>
      </tr>
      <tr>
        <td style={styles.footer}>© {new Date().getFullYear()}, Zenorbis</td>
      </tr>
    </table>
  );
}

export default EmailTemplate;
