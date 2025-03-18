
const express = require('express')
import {handler4684} from "./handler4684";
const app = express()
app.get('/4684', handler4684)
app.listen(3000, () => {})
        