
const express = require('express')
import {handler9897} from "./handler9897";
const app = express()
app.get('/9897', handler9897)
app.listen(3000, () => {})
        