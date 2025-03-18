
const express = require('express')
import {handler4783} from "./handler4783";
const app = express()
app.get('/4783', handler4783)
app.listen(3000, () => {})
        