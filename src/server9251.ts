
const express = require('express')
import {handler9251} from "./handler9251";
const app = express()
app.get('/9251', handler9251)
app.listen(3000, () => {})
        