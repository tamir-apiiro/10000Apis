
const express = require('express')
import {handler9302} from "./handler9302";
const app = express()
app.get('/9302', handler9302)
app.listen(3000, () => {})
        