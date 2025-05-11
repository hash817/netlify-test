export default function Loading() {
    const styles = {
        body: {
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            fontFamily: "'Arial', sans-serif"
        },
        loaderContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        loader: {
            position: 'relative',
            width: '120px',
            height: '120px',
            marginBottom: '20px'
        },
        red_circle: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'oklch(0.62 0.2499 29.55)',
            animation: 'spin 2s linear infinite'
        },
        circle2: {
            position: 'absolute',
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'oklch(0.21 0.059 284.64)',
            animation: 'spin 2s linear infinite',
            animationDelay: '-0.5s'
        },
        circle3: {
            position: 'absolute',
            width: '60%',
            height: '60%',
            top: '20%',
            left: '20%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'oklch(0.89 0.1507 198.98)',
            animation: 'spin 2s linear infinite',
            animationDelay: '-1s'
        },
        purple_circle: {
            position: 'absolute',
            width: '40%',
            height: '40%',
            top: '30%',
            left: '30%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'oklch(0.28 0.1179 265.43)',
            animation: 'spin 2s linear infinite',
            animationDelay: '-1.5s'
        },
        loaderText: {
            color: '#1d3557',
            fontSize: '18px',
            letterSpacing: '2px',
            marginTop: '10px',
            fontWeight: '500'
        },
        loaderSubtext: {
            color: '#457b9d',
            fontSize: '14px',
            opacity: 0,
            animation: 'fadeInOut 3s infinite'
        },
        '@keyframes spin': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        '@keyframes fadeInOut': {
            '0%, 100%': {
                opacity: 0
            },
            '50%': {
                opacity: 1
            }
        }
    };

    return (
        <div style={styles.body}>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
            </style>
            <div style={styles.loaderContainer}>
                <div style={styles.loader}>
                    <div style={styles.red_circle}></div>
                    <div style={styles.circle2}></div>
                    <div style={styles.circle3}></div>
                    <div style={styles.purple_circle}></div>
                </div>
                {/* <div style={styles.loaderText}>your world starts here</div> */}
                {/* <div style={styles.loaderSubtext}>aa</div> */}
            </div>
        </div>
    );
}