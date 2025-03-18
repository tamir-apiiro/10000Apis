
const express = require('express')
import {handler9288} from "./handler9288";
const app = express()
app.get('/9288', handler9288)
app.listen(3000, () => {})
        