
const express = require('express')
import {handler9213} from "./handler9213";
const app = express()
app.get('/9213', handler9213)
app.listen(3000, () => {})
        