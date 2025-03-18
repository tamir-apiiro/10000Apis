
const express = require('express')
import {handler7595} from "./handler7595";
const app = express()
app.get('/7595', handler7595)
app.listen(3000, () => {})
        