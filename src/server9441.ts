
const express = require('express')
import {handler9441} from "./handler9441";
const app = express()
app.get('/9441', handler9441)
app.listen(3000, () => {})
        