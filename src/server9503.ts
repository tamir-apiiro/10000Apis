
const express = require('express')
import {handler9503} from "./handler9503";
const app = express()
app.get('/9503', handler9503)
app.listen(3000, () => {})
        