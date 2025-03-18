
const express = require('express')
import {handler9107} from "./handler9107";
const app = express()
app.get('/9107', handler9107)
app.listen(3000, () => {})
        