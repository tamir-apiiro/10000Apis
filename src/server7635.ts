
const express = require('express')
import {handler7635} from "./handler7635";
const app = express()
app.get('/7635', handler7635)
app.listen(3000, () => {})
        