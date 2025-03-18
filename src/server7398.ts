
const express = require('express')
import {handler7398} from "./handler7398";
const app = express()
app.get('/7398', handler7398)
app.listen(3000, () => {})
        