
const express = require('express')
import {handler9515} from "./handler9515";
const app = express()
app.get('/9515', handler9515)
app.listen(3000, () => {})
        