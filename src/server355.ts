
const express = require('express')
import {handler355} from "./handler355";
const app = express()
app.get('/355', handler355)
app.listen(3000, () => {})
        