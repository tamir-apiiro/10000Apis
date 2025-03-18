
const express = require('express')
import {handler7604} from "./handler7604";
const app = express()
app.get('/7604', handler7604)
app.listen(3000, () => {})
        