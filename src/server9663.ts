
const express = require('express')
import {handler9663} from "./handler9663";
const app = express()
app.get('/9663', handler9663)
app.listen(3000, () => {})
        