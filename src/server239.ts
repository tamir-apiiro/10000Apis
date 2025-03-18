
const express = require('express')
import {handler239} from "./handler239";
const app = express()
app.get('/239', handler239)
app.listen(3000, () => {})
        