
const express = require('express')
import {handler2006} from "./handler2006";
const app = express()
app.get('/2006', handler2006)
app.listen(3000, () => {})
        