
const express = require('express')
import {handler7812} from "./handler7812";
const app = express()
app.get('/7812', handler7812)
app.listen(3000, () => {})
        