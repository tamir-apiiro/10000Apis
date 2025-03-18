
const express = require('express')
import {handler7662} from "./handler7662";
const app = express()
app.get('/7662', handler7662)
app.listen(3000, () => {})
        