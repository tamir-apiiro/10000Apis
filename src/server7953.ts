
const express = require('express')
import {handler7953} from "./handler7953";
const app = express()
app.get('/7953', handler7953)
app.listen(3000, () => {})
        