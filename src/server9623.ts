
const express = require('express')
import {handler9623} from "./handler9623";
const app = express()
app.get('/9623', handler9623)
app.listen(3000, () => {})
        