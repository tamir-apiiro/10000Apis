
const express = require('express')
import {handler9307} from "./handler9307";
const app = express()
app.get('/9307', handler9307)
app.listen(3000, () => {})
        