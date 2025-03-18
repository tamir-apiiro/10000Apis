
const express = require('express')
import {handler4942} from "./handler4942";
const app = express()
app.get('/4942', handler4942)
app.listen(3000, () => {})
        