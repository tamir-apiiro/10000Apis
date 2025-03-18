
const express = require('express')
import {handler812} from "./handler812";
const app = express()
app.get('/812', handler812)
app.listen(3000, () => {})
        