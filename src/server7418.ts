
const express = require('express')
import {handler7418} from "./handler7418";
const app = express()
app.get('/7418', handler7418)
app.listen(3000, () => {})
        