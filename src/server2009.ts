
const express = require('express')
import {handler2009} from "./handler2009";
const app = express()
app.get('/2009', handler2009)
app.listen(3000, () => {})
        