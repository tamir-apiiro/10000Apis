
const express = require('express')
import {handler9753} from "./handler9753";
const app = express()
app.get('/9753', handler9753)
app.listen(3000, () => {})
        