
const express = require('express')
import {handler9738} from "./handler9738";
const app = express()
app.get('/9738', handler9738)
app.listen(3000, () => {})
        