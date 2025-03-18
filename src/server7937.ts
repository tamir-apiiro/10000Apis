
const express = require('express')
import {handler7937} from "./handler7937";
const app = express()
app.get('/7937', handler7937)
app.listen(3000, () => {})
        