
const express = require('express')
import {handler7926} from "./handler7926";
const app = express()
app.get('/7926', handler7926)
app.listen(3000, () => {})
        