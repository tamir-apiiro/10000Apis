
const express = require('express')
import {handler361} from "./handler361";
const app = express()
app.get('/361', handler361)
app.listen(3000, () => {})
        