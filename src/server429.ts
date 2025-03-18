
const express = require('express')
import {handler429} from "./handler429";
const app = express()
app.get('/429', handler429)
app.listen(3000, () => {})
        