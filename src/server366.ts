
const express = require('express')
import {handler366} from "./handler366";
const app = express()
app.get('/366', handler366)
app.listen(3000, () => {})
        