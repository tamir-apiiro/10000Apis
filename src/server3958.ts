
const express = require('express')
import {handler3958} from "./handler3958";
const app = express()
app.get('/3958', handler3958)
app.listen(3000, () => {})
        