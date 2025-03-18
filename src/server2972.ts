
const express = require('express')
import {handler2972} from "./handler2972";
const app = express()
app.get('/2972', handler2972)
app.listen(3000, () => {})
        