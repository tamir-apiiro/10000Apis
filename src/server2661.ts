
const express = require('express')
import {handler2661} from "./handler2661";
const app = express()
app.get('/2661', handler2661)
app.listen(3000, () => {})
        