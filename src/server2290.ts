
const express = require('express')
import {handler2290} from "./handler2290";
const app = express()
app.get('/2290', handler2290)
app.listen(3000, () => {})
        