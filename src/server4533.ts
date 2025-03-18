
const express = require('express')
import {handler4533} from "./handler4533";
const app = express()
app.get('/4533', handler4533)
app.listen(3000, () => {})
        