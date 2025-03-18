
const express = require('express')
import {handler610} from "./handler610";
const app = express()
app.get('/610', handler610)
app.listen(3000, () => {})
        