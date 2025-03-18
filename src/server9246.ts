
const express = require('express')
import {handler9246} from "./handler9246";
const app = express()
app.get('/9246', handler9246)
app.listen(3000, () => {})
        