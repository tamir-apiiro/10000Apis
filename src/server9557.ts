
const express = require('express')
import {handler9557} from "./handler9557";
const app = express()
app.get('/9557', handler9557)
app.listen(3000, () => {})
        