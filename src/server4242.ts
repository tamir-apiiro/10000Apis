
const express = require('express')
import {handler4242} from "./handler4242";
const app = express()
app.get('/4242', handler4242)
app.listen(3000, () => {})
        