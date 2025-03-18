
const express = require('express')
import {handler2568} from "./handler2568";
const app = express()
app.get('/2568', handler2568)
app.listen(3000, () => {})
        