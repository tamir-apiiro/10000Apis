
const express = require('express')
import {handler701} from "./handler701";
const app = express()
app.get('/701', handler701)
app.listen(3000, () => {})
        