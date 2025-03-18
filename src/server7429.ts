
const express = require('express')
import {handler7429} from "./handler7429";
const app = express()
app.get('/7429', handler7429)
app.listen(3000, () => {})
        