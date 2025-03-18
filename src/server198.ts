
const express = require('express')
import {handler198} from "./handler198";
const app = express()
app.get('/198', handler198)
app.listen(3000, () => {})
        