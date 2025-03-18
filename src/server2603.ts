
const express = require('express')
import {handler2603} from "./handler2603";
const app = express()
app.get('/2603', handler2603)
app.listen(3000, () => {})
        