
const express = require('express')
import {handler275} from "./handler275";
const app = express()
app.get('/275', handler275)
app.listen(3000, () => {})
        