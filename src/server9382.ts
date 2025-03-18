
const express = require('express')
import {handler9382} from "./handler9382";
const app = express()
app.get('/9382', handler9382)
app.listen(3000, () => {})
        