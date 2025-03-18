
const express = require('express')
import {handler3701} from "./handler3701";
const app = express()
app.get('/3701', handler3701)
app.listen(3000, () => {})
        