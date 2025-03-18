
const express = require('express')
import {handler9684} from "./handler9684";
const app = express()
app.get('/9684', handler9684)
app.listen(3000, () => {})
        