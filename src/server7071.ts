
const express = require('express')
import {handler7071} from "./handler7071";
const app = express()
app.get('/7071', handler7071)
app.listen(3000, () => {})
        