
const express = require('express')
import {handler9505} from "./handler9505";
const app = express()
app.get('/9505', handler9505)
app.listen(3000, () => {})
        