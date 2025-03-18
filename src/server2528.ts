
const express = require('express')
import {handler2528} from "./handler2528";
const app = express()
app.get('/2528', handler2528)
app.listen(3000, () => {})
        