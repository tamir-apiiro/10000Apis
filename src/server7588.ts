
const express = require('express')
import {handler7588} from "./handler7588";
const app = express()
app.get('/7588', handler7588)
app.listen(3000, () => {})
        