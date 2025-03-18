
const express = require('express')
import {handler9174} from "./handler9174";
const app = express()
app.get('/9174', handler9174)
app.listen(3000, () => {})
        