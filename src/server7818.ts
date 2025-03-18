
const express = require('express')
import {handler7818} from "./handler7818";
const app = express()
app.get('/7818', handler7818)
app.listen(3000, () => {})
        