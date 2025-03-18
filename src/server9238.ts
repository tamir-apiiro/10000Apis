
const express = require('express')
import {handler9238} from "./handler9238";
const app = express()
app.get('/9238', handler9238)
app.listen(3000, () => {})
        