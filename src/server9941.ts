
const express = require('express')
import {handler9941} from "./handler9941";
const app = express()
app.get('/9941', handler9941)
app.listen(3000, () => {})
        