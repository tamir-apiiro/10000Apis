
const express = require('express')
import {handler9991} from "./handler9991";
const app = express()
app.get('/9991', handler9991)
app.listen(3000, () => {})
        