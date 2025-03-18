
const express = require('express')
import {handler9411} from "./handler9411";
const app = express()
app.get('/9411', handler9411)
app.listen(3000, () => {})
        