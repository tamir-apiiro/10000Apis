
const express = require('express')
import {handler7708} from "./handler7708";
const app = express()
app.get('/7708', handler7708)
app.listen(3000, () => {})
        