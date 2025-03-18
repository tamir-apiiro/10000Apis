
const express = require('express')
import {handler4293} from "./handler4293";
const app = express()
app.get('/4293', handler4293)
app.listen(3000, () => {})
        