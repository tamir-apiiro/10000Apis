
const express = require('express')
import {handler9405} from "./handler9405";
const app = express()
app.get('/9405', handler9405)
app.listen(3000, () => {})
        