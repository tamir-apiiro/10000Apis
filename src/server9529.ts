
const express = require('express')
import {handler9529} from "./handler9529";
const app = express()
app.get('/9529', handler9529)
app.listen(3000, () => {})
        