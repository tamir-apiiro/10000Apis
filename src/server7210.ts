
const express = require('express')
import {handler7210} from "./handler7210";
const app = express()
app.get('/7210', handler7210)
app.listen(3000, () => {})
        