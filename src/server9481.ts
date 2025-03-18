
const express = require('express')
import {handler9481} from "./handler9481";
const app = express()
app.get('/9481', handler9481)
app.listen(3000, () => {})
        