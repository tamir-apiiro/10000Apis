
const express = require('express')
import {handler364} from "./handler364";
const app = express()
app.get('/364', handler364)
app.listen(3000, () => {})
        