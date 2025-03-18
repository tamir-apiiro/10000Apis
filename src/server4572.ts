
const express = require('express')
import {handler4572} from "./handler4572";
const app = express()
app.get('/4572', handler4572)
app.listen(3000, () => {})
        