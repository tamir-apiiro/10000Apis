
const express = require('express')
import {handler9220} from "./handler9220";
const app = express()
app.get('/9220', handler9220)
app.listen(3000, () => {})
        