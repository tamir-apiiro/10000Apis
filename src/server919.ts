
const express = require('express')
import {handler919} from "./handler919";
const app = express()
app.get('/919', handler919)
app.listen(3000, () => {})
        