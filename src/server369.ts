
const express = require('express')
import {handler369} from "./handler369";
const app = express()
app.get('/369', handler369)
app.listen(3000, () => {})
        