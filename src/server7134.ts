
const express = require('express')
import {handler7134} from "./handler7134";
const app = express()
app.get('/7134', handler7134)
app.listen(3000, () => {})
        