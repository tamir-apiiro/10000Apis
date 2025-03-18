
const express = require('express')
import {handler9658} from "./handler9658";
const app = express()
app.get('/9658', handler9658)
app.listen(3000, () => {})
        