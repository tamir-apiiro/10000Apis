
const express = require('express')
import {handler6400} from "./handler6400";
const app = express()
app.get('/6400', handler6400)
app.listen(3000, () => {})
        