
const express = require('express')
import {handler159} from "./handler159";
const app = express()
app.get('/159', handler159)
app.listen(3000, () => {})
        