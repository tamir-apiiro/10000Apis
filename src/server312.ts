
const express = require('express')
import {handler312} from "./handler312";
const app = express()
app.get('/312', handler312)
app.listen(3000, () => {})
        