
const express = require('express')
import {handler4712} from "./handler4712";
const app = express()
app.get('/4712', handler4712)
app.listen(3000, () => {})
        