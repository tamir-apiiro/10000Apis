
const express = require('express')
import {handler765} from "./handler765";
const app = express()
app.get('/765', handler765)
app.listen(3000, () => {})
        