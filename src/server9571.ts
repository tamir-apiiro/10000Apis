
const express = require('express')
import {handler9571} from "./handler9571";
const app = express()
app.get('/9571', handler9571)
app.listen(3000, () => {})
        