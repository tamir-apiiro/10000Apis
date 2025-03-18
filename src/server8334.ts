
const express = require('express')
import {handler8334} from "./handler8334";
const app = express()
app.get('/8334', handler8334)
app.listen(3000, () => {})
        