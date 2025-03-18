
const express = require('express')
import {handler9223} from "./handler9223";
const app = express()
app.get('/9223', handler9223)
app.listen(3000, () => {})
        