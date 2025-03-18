
const express = require('express')
import {handler7701} from "./handler7701";
const app = express()
app.get('/7701', handler7701)
app.listen(3000, () => {})
        