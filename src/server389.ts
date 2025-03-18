
const express = require('express')
import {handler389} from "./handler389";
const app = express()
app.get('/389', handler389)
app.listen(3000, () => {})
        