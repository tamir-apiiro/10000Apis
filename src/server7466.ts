
const express = require('express')
import {handler7466} from "./handler7466";
const app = express()
app.get('/7466', handler7466)
app.listen(3000, () => {})
        