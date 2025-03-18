
const express = require('express')
import {handler9468} from "./handler9468";
const app = express()
app.get('/9468', handler9468)
app.listen(3000, () => {})
        