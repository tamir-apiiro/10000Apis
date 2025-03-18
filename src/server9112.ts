
const express = require('express')
import {handler9112} from "./handler9112";
const app = express()
app.get('/9112', handler9112)
app.listen(3000, () => {})
        