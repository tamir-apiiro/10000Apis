
const express = require('express')
import {handler9278} from "./handler9278";
const app = express()
app.get('/9278', handler9278)
app.listen(3000, () => {})
        