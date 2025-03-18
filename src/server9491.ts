
const express = require('express')
import {handler9491} from "./handler9491";
const app = express()
app.get('/9491', handler9491)
app.listen(3000, () => {})
        