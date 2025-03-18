
const express = require('express')
import {handler9899} from "./handler9899";
const app = express()
app.get('/9899', handler9899)
app.listen(3000, () => {})
        