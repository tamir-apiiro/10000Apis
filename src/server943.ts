
const express = require('express')
import {handler943} from "./handler943";
const app = express()
app.get('/943', handler943)
app.listen(3000, () => {})
        