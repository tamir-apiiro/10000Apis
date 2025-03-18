
const express = require('express')
import {handler7975} from "./handler7975";
const app = express()
app.get('/7975', handler7975)
app.listen(3000, () => {})
        