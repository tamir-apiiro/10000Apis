
const express = require('express')
import {handler9009} from "./handler9009";
const app = express()
app.get('/9009', handler9009)
app.listen(3000, () => {})
        