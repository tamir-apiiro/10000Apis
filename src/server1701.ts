
const express = require('express')
import {handler1701} from "./handler1701";
const app = express()
app.get('/1701', handler1701)
app.listen(3000, () => {})
        