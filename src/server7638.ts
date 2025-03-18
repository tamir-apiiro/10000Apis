
const express = require('express')
import {handler7638} from "./handler7638";
const app = express()
app.get('/7638', handler7638)
app.listen(3000, () => {})
        