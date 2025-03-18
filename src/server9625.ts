
const express = require('express')
import {handler9625} from "./handler9625";
const app = express()
app.get('/9625', handler9625)
app.listen(3000, () => {})
        