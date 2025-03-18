
const express = require('express')
import {handler9487} from "./handler9487";
const app = express()
app.get('/9487', handler9487)
app.listen(3000, () => {})
        