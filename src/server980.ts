
const express = require('express')
import {handler980} from "./handler980";
const app = express()
app.get('/980', handler980)
app.listen(3000, () => {})
        