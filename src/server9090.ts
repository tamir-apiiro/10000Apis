
const express = require('express')
import {handler9090} from "./handler9090";
const app = express()
app.get('/9090', handler9090)
app.listen(3000, () => {})
        