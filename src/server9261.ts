
const express = require('express')
import {handler9261} from "./handler9261";
const app = express()
app.get('/9261', handler9261)
app.listen(3000, () => {})
        