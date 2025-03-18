
const express = require('express')
import {handler936} from "./handler936";
const app = express()
app.get('/936', handler936)
app.listen(3000, () => {})
        