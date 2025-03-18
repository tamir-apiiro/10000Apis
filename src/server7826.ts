
const express = require('express')
import {handler7826} from "./handler7826";
const app = express()
app.get('/7826', handler7826)
app.listen(3000, () => {})
        