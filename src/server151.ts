
const express = require('express')
import {handler151} from "./handler151";
const app = express()
app.get('/151', handler151)
app.listen(3000, () => {})
        