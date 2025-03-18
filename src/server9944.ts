
const express = require('express')
import {handler9944} from "./handler9944";
const app = express()
app.get('/9944', handler9944)
app.listen(3000, () => {})
        