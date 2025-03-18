
const express = require('express')
import {handler7470} from "./handler7470";
const app = express()
app.get('/7470', handler7470)
app.listen(3000, () => {})
        