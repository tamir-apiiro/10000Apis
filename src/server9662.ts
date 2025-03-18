
const express = require('express')
import {handler9662} from "./handler9662";
const app = express()
app.get('/9662', handler9662)
app.listen(3000, () => {})
        