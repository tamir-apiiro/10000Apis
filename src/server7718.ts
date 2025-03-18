
const express = require('express')
import {handler7718} from "./handler7718";
const app = express()
app.get('/7718', handler7718)
app.listen(3000, () => {})
        