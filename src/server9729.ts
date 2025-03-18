
const express = require('express')
import {handler9729} from "./handler9729";
const app = express()
app.get('/9729', handler9729)
app.listen(3000, () => {})
        