
const express = require('express')
import {handler9742} from "./handler9742";
const app = express()
app.get('/9742', handler9742)
app.listen(3000, () => {})
        