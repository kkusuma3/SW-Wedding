/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SPREADSHEET_ID : '1DE2_8vROvNNuy8PoBG3WCg37f2rbVnkXi70eoHPSC-Y',
        RSVP_SHEET_ID : '0',
        WISHES_SHEET_ID: '523069520',
        CLIENT_EMAIL : 'google-sheets-service-account@sw-wedding.iam.gserviceaccount.com',
        PRIVATE_KEY : '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDmSgWtT6zbzm0X\nkXwdusNHhKQXF9Bq3S82W7FIB8A3LTrBNJwIeCMCyqFrIeGZoW6ucr29s1JQi3dj\nVY6413xCtOlvY7iMLRtTOy6pnbQpTQTYMeSQJFx+No4gNZoYR/B8+KrRxVBWwKMR\nMWH8vKmWtUoe0F59i5ySvUmlBwcGCtBfcRFsQuuSoRAyMhWvRXrLbT1QqcD7v1PY\nd4GQl++gosuwpOlNDke79x1x+lF/IPzu8V6oA2PKVlcWKxC+FAd0nDXCnU3gSn4m\nHK8zj9mjNtiGQmHOHgVBcLn/9PRj8cv5dNbpDSPulkJG+J110GyrT6VkdgNCpF18\nGEzMwpbBAgMBAAECggEABcQqujk5gdN8Zc+txOzNQPgwR6e//z0Elp7bJIuVI4yN\nYRMZKRkg/0vlmNIjXP5u0A1tdNeNoxiq56DXzwcORHlVMwXTNCdY/M+JjpO1VCdq\njKNLLtTKQBrLmkDdV+hNPEPZuyDurw1px99tra9nq69kaLsc8pXRWNdGhcxUP7Fv\nd14ieEkCr9jI9I4vHQjk1g9LCU78l4mKKvlg0zKqdAZ9BeCstmNFK4Rh9slW4Tzd\nMEvXPx+luUWg7DmMsByrY3oBgrwQ2AfInUKZ84bxQH8oUs9x0ikZrndWIrlU8eJT\n/QsQeaHHIOc2ay0wpggP8C0wVZ2n4NwAorWO7PAhMQKBgQD0b1gfA0NIiROwzp9Z\nHdNmux1N4FH+85FlmNq2wVdNk77efzRyOjWopIuOCg3XRA8WapExuDRZgeMgHK8W\nTaDyI6dl8nw8E4DH+EEUElmK3r8TdOZ6XNBsO7l0Mao01WtJj/DIXVO9dT1I2MTb\n+hy+bfs5TiPk+XClAA/t4obS1QKBgQDxL1c3nBeqZEWkcedXccam3ob9Oqyjh5zk\n9tSENOO1wTz/E4i1nvBnHqqCll15rDYuuKHEk6C7M82CgKorKjFUAaVApKuqWvba\nDYgcl3qD5VILlf9L0FIlff2xIEa+bliqIobItD7R2nveYaCES7K/1KHgLvh+7VXO\n1nvemoHyPQKBgQD0WWI0DmTyW+WNN+Bfi8tKxP50XSxau027zGPHkdseN/X0IiFh\nlwMRBPxlD3Pqn6SdegaPN19NouRTs5jrqMqdhDrRVOgQfkacoHUeBYHxqt5EKvZD\nmAjaSZIIr6VAj6BitzuycGlH2a1b5yZT6OFXFEaxcIW9XgXXTAqgeXThyQKBgQCI\nlaC002brjeGKoR67/KjdM0QLAEFoUpJdcBMl07Xo5kgew/c1s469NzakwXaqQwZk\nKxchdeEeYtXNRAQacciBpHTrSNYWoXEOR39/gaFWNHXkLcvoKU97//+9YWPu0BrS\nLr9ZxgmVWj+vzmXSxfOygz4w8Si06L8hZYG8rI9OmQKBgQCVE3BgVqdp5gwUPv3H\nkCnBnn5tykFgInq/Ul5wmcuydNftDcjDl8DZlgFXaPTbVoFB6LYsMhWoVoUEZYe4\nIkOC6UhNvQ+aAM0bSUYfUJjen7vfh4qqy5nCgJ08oCpnHF77W8KK0aAD6fp7BrNL\n/uUi7vyVOT45oIaMerdS18AQtw==\n-----END PRIVATE KEY-----\n',
     },
    images: {
        domains: ['aawedding.mo.cloudinary.net'],
    },
    // Important for google spreadsheet and jwt to work!
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.tls = false;
          config.resolve.fallback.net = false;
          config.resolve.fallback.child_process = false;
        }
    
        return config;
    },
};

export default nextConfig;
