
const express = require('express')
import {handler9160} from "./handler9160";
const app = express()
app.get('/9160', handler9160)
app.listen(3000, () => {})
        