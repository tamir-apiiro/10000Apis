
const express = require('express')
import {handler795} from "./handler795";
const app = express()
app.get('/795', handler795)
app.listen(3000, () => {})
        