
const express = require('express')
import {handler9489} from "./handler9489";
const app = express()
app.get('/9489', handler9489)
app.listen(3000, () => {})
        