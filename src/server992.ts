
const express = require('express')
import {handler992} from "./handler992";
const app = express()
app.get('/992', handler992)
app.listen(3000, () => {})
        