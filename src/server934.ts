
const express = require('express')
import {handler934} from "./handler934";
const app = express()
app.get('/934', handler934)
app.listen(3000, () => {})
        