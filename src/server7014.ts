
const express = require('express')
import {handler7014} from "./handler7014";
const app = express()
app.get('/7014', handler7014)
app.listen(3000, () => {})
        