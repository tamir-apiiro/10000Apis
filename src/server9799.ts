
const express = require('express')
import {handler9799} from "./handler9799";
const app = express()
app.get('/9799', handler9799)
app.listen(3000, () => {})
        