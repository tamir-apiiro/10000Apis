
const express = require('express')
import {handler9756} from "./handler9756";
const app = express()
app.get('/9756', handler9756)
app.listen(3000, () => {})
        