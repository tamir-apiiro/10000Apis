
const express = require('express')
import {handler9113} from "./handler9113";
const app = express()
app.get('/9113', handler9113)
app.listen(3000, () => {})
        