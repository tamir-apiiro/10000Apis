
const express = require('express')
import {handler2992} from "./handler2992";
const app = express()
app.get('/2992', handler2992)
app.listen(3000, () => {})
        