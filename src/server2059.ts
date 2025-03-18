
const express = require('express')
import {handler2059} from "./handler2059";
const app = express()
app.get('/2059', handler2059)
app.listen(3000, () => {})
        