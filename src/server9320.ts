
const express = require('express')
import {handler9320} from "./handler9320";
const app = express()
app.get('/9320', handler9320)
app.listen(3000, () => {})
        