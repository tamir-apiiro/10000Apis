
const express = require('express')
import {handler2701} from "./handler2701";
const app = express()
app.get('/2701', handler2701)
app.listen(3000, () => {})
        