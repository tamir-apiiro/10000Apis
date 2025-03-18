
const express = require('express')
import {handler9326} from "./handler9326";
const app = express()
app.get('/9326', handler9326)
app.listen(3000, () => {})
        