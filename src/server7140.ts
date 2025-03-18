
const express = require('express')
import {handler7140} from "./handler7140";
const app = express()
app.get('/7140', handler7140)
app.listen(3000, () => {})
        