
const express = require('express')
import {handler121} from "./handler121";
const app = express()
app.get('/121', handler121)
app.listen(3000, () => {})
        