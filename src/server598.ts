
const express = require('express')
import {handler598} from "./handler598";
const app = express()
app.get('/598', handler598)
app.listen(3000, () => {})
        