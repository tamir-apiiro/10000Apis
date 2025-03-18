
const express = require('express')
import {handler9226} from "./handler9226";
const app = express()
app.get('/9226', handler9226)
app.listen(3000, () => {})
        