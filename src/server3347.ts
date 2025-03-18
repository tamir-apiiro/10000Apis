
const express = require('express')
import {handler3347} from "./handler3347";
const app = express()
app.get('/3347', handler3347)
app.listen(3000, () => {})
        