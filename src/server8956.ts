
const express = require('express')
import {handler8956} from "./handler8956";
const app = express()
app.get('/8956', handler8956)
app.listen(3000, () => {})
        