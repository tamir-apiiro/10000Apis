
const express = require('express')
import {handler8701} from "./handler8701";
const app = express()
app.get('/8701', handler8701)
app.listen(3000, () => {})
        