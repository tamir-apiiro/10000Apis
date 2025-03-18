
const express = require('express')
import {handler8194} from "./handler8194";
const app = express()
app.get('/8194', handler8194)
app.listen(3000, () => {})
        