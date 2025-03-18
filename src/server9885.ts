
const express = require('express')
import {handler9885} from "./handler9885";
const app = express()
app.get('/9885', handler9885)
app.listen(3000, () => {})
        