
const express = require('express')
import {handler9806} from "./handler9806";
const app = express()
app.get('/9806', handler9806)
app.listen(3000, () => {})
        