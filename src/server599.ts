
const express = require('express')
import {handler599} from "./handler599";
const app = express()
app.get('/599', handler599)
app.listen(3000, () => {})
        