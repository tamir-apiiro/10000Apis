
const express = require('express')
import {handler763} from "./handler763";
const app = express()
app.get('/763', handler763)
app.listen(3000, () => {})
        