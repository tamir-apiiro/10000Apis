
const express = require('express')
import {handler2638} from "./handler2638";
const app = express()
app.get('/2638', handler2638)
app.listen(3000, () => {})
        