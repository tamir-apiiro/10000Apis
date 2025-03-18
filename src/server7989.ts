
const express = require('express')
import {handler7989} from "./handler7989";
const app = express()
app.get('/7989', handler7989)
app.listen(3000, () => {})
        