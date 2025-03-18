
const express = require('express')
import {handler8294} from "./handler8294";
const app = express()
app.get('/8294', handler8294)
app.listen(3000, () => {})
        