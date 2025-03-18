
const express = require('express')
import {handler9777} from "./handler9777";
const app = express()
app.get('/9777', handler9777)
app.listen(3000, () => {})
        