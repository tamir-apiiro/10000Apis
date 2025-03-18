
const express = require('express')
import {handler9689} from "./handler9689";
const app = express()
app.get('/9689', handler9689)
app.listen(3000, () => {})
        